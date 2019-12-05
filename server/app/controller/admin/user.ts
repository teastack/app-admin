import { Controller } from 'egg';

export default class UserController extends Controller {
  public async userList() {
    const res = await this.ctx.service.user.getUserList()
    this.ctx.body = res
  }
}
