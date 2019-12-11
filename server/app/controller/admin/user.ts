import { Controller } from 'egg';

export default class UserController extends Controller {

  /*
  获取用户列表
  */ 
  public async userList() {
    const { ctx }= this
    let user = await ctx.service.user.List();
    ctx.body = user
  }
}
