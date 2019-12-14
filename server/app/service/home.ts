import { Service } from 'egg';

export default class Home extends Service {
    
    /*
    *用户添加留言
    */
    async addMessage () {
        const { ctx } = this
        const parameter = this.ctx.request.body;  // 获取用户请求参数
        const jwtInfo = ctx.state.user; // 从jwt验证中获取用户id
        let result = null;
        if (parameter.img_arr.length === 0) {
            result = await this.ctx.model.MessageBoard.create({
                uid: jwtInfo.userid,
                message: parameter.message
            });
        } else {
            const img_arr = JSON.stringify(parameter.img_arr)
            result = await this.ctx.model.MessageBoard.create({
                uid: jwtInfo.userid,
                message: parameter.message,
                img_url: img_arr
            });
        }
        if (!result) {
            ctx.body = {
                code: 999,
                data: [],
                msg: '发表失败'
            }
        } else {
            ctx.body = {
                code: 200,
                data: [],
                msg: '发表成功'
            }
        }
    }
}