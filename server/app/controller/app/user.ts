import { Controller } from 'egg';

export default class AppUserController extends Controller {
  public async register() {
    this.ctx.service.user.register()
    let data = await this.ctx.service.user.register()
    this.ctx.body = data
  }
}
