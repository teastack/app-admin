import { Service } from 'egg';

export default class Home extends Service {

    /*
    * 全部留言列表
    */
    async messageList () {
        const { ctx } = this;
        const parameter = ctx.query; // 获取get请求参数
        await this.ctx.model.MessageBoard.findAndCountAll({
            where: {
                del: 1,
            },
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
    * 用户个人留言列表
    */
    async messageOwn () {
        const { ctx } = this;
        const parameter = ctx.query; // 获取get请求参数
        await this.ctx.model.MessageBoard.findAndCountAll({
            where: {
                del: 1,
                uid: ctx.state.user.userid,
            },
            attributes: [ 'id', 'message', 'img_url', 'creation_time' ],
            order: [[ 'creation_time', 'DESC' ]],
            limit: Number(parameter.pageSize),
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
            let num: number = 0;
            for (const key in parameter.img_arr) {
                if (parameter.img_arr.hasOwnProperty(key)) {
                    num++;
                    const base64 = parameter.img_arr[key].replace(/^data:image\/\w+;base64,/, ''); // 去掉图片base64码前面部分data:image/png;base64
                    const dataBuffer = Buffer.from(base64, 'base64'); // 把base64码转成buffer对象
                    let path = `app/public/images/message_images/${jwtInfo.username}/tea_stack${Date.now() + num}.png`;
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
                del: 1,
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
                del: 1,
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

    /*
    *   用户删除留言
    */
    async delMessage () {
      const { ctx } = this;
      const parameter = ctx.request.body;
      await this.ctx.model.MessageBoard.update(
        {
          del: 0,
        }, {
        where: { id: parameter.id },
        },
      ).then(() => {
        ctx.body = {
            code: 200,
            data: [],
            msg: '删除成功',
        };
      }).catch(() => {
        ctx.body = {
            code: 999,
            data: [],
            msg: '删除失败',
        };
      });
    }
}
