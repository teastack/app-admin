import { Controller } from 'egg';

export default class AppUserController extends Controller {
  public async register() {
    const data = await this.ctx.service.user.register();
    this.ctx.body = data;
  }

  public async userInfo() {
    await this.ctx.service.user.getUserInfo();
  }

}
