import { Service } from 'egg';

export default class Home extends Service {

    /*
    * 留言列表
    */
    async messageList () {
        const { ctx } = this;
        const parameter = ctx.query; // 获取get请求参数
        await this.ctx.model.MessageBoard.findAndCountAll({
            attributes: [ 'uid', 'message', 'img_url', 'creation_time' ],
            order: [[ 'creation_time', 'DESC' ]],
            limit: Number(parameter.pageSize),
            distinct: true, // 统计总数是不计算关联表
            include: {
              model: this.app.model.User,
              attributes: [ 'user_name', 'nick_name', 'img_url' ],
            },
            raw: false,
        }).then(result => {
            ctx.body = {
                code: 200,
                data: result,
                msg: '留言列表获取成功',
            };
        }).catch(err => {
            ctx.body = {
                code: 999,
                data: err,
                msg: '留言列表获取失败',
            };
        });
    }

    /*
    *用户添加留言
    */
    async addMessage () {
        const { ctx } = this;
        const fs = require('fs');  // 引入fs模块

        const parameter = this.ctx.request.body;  // 获取用户请求参数
        const jwtInfo = ctx.state.user; // 从jwt验证中获取用户id
        let img_arr: any = [];
        if (parameter.img_arr) {
            for (const key in parameter.img_arr) {
                if (parameter.img_arr.hasOwnProperty(key)) {
                    const base64 = parameter.img_arr[key].replace(/^data:image\/\w+;base64,/, ''); // 去掉图片base64码前面部分data:image/png;base64
                    const dataBuffer = Buffer.from(base64, 'base64'); // 把base64码转成buffer对象
                    let path = `app/public/images/message_images/${jwtInfo.username}/${Date.now()}.png`;
                    const fileMkdir = `app/public/images/message_images/${jwtInfo.username}`;
                    // 判断用户文件夹是否存在
                    const isFile = fs.existsSync(fileMkdir);
                    if (isFile) {
                        fs.writeFile(path, dataBuffer, (err: any) => {
                            if (err) {
                                throw err;
                            }
                        });
                    } else {
                        fs.mkdirSync(fileMkdir, (err: any) => {
                            if (err) {
                                throw err;
                            }
                        });
                        fs.writeFile(path, dataBuffer, (err: any) => {
                            if (err) {
                                throw err;
                            }
                        });
                    }
                    path = path.slice(3);
                    img_arr.push(path);
                }
            }
            img_arr = JSON.stringify(img_arr);
            await this.ctx.model.MessageBoard.create({
                uid: jwtInfo.userid,
                message: parameter.message,
                img_url: img_arr,
            }).then(() => {
                ctx.body = {
                    code: 200,
                    data: [],
                    msg: '发表成功',
                };
            }).catch(err => {
                throw err;
            });
        } else {
            await this.ctx.model.MessageBoard.create({
                uid: jwtInfo.userid,
                message: parameter.message,
            }).then(() => {
                ctx.body = {
                    code: 200,
                    data: [],
                    msg: '发表成功',
                };
            }).catch(err => {
                throw err;
            });
        }
    }
}
