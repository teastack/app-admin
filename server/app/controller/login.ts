import { Controller } from 'egg';

export default class LoginController extends Controller {
  public async index() {
    const { ctx } = this;
    const data = ctx.request.body; // 获取登录参数
    console.log(data);
    ctx.body = 'egg';
  }
}
