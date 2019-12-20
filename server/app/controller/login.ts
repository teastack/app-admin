import { Controller } from 'egg';

export default class LoginController extends Controller {
  public async index() {
    const { ctx } = this;
    const data = ctx.request.body; // 获取登录参数
    // 生成 token 的方式
    const res = await ctx.service.login.login(data);
    ctx.body = res;
  }
}
