import { Controller } from 'egg';

export default class UserController extends Controller {

  /*
   *获取权限列表
  */
  public async index() {
    const crypto = require('crypto');  // 导入加密模块，里面有MD5加密解密方法
    const md5 = crypto.createHash('md5');
    const pass = md5.update('123456').digest('hex');
    console.log(pass);
    console.log('`````````````````````');
    const { ctx } = this;
    const data = await ctx.model.Permission.findAll();
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

  /*
  * 管理员登录
  */
  public async userLogin() {
    await this.ctx.service.admin.user.adminUserLogin();
  }
}
