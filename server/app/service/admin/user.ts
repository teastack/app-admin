import { Service } from 'egg';
import { __assign } from 'tslib';

export default class AdminUser extends Service {

    // 管理员登录
    async adminUserLogin() {
        // 获取请求参数
        const parameter = this.ctx.request.body;
        await this.ctx.model.AdminUser.findAll({
            where: {
                username: parameter.username,
                stauts: 1,
            },
            include: {
                model: this.app.model.Role,
            },
          }).then(res => {
            if (res && res.length > 0) {
                const pass_word = this.ctx.encryption(parameter.password);
                if (res[0].password !== pass_word) {
                    this.ctx.body = this.ctx.rendata(999, [], '密码错误');
                } else {
                    const data = {
                        token: this.ctx.generateToken(res),
                        userinfo: res[0],
                    };
                    this.ctx.body = this.ctx.rendata(200, data, '登录');
                }
            } else {
                this.ctx.body = {
                    code: 999,
                    data: [],
                    msg: '用户不存在',
                };
            }
          }).catch(err => {
            this.ctx.body = err;
          });
    }
}
