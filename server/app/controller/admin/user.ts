import { Controller } from 'egg';

export default class UserController extends Controller {

  /*
   *获取权限列表
  */
  public async index() {
    const { ctx } = this;
    const data = await ctx.model.Role.findAll();
    ctx.body = data;
  }

  /*
  获取用户列表
  */
  public async userList() {
    const { ctx } = this;
    const user = await ctx.service.user.List();
    ctx.body = user;
  }
}
