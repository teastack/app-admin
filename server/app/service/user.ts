import { Service } from 'egg';

export default class User extends Service {

  /**
   * 获取用户列表
   */
  async List() {
    const result: any = await this.ctx.model.User.findAll({attributes: ['id', 'user_name', 'nick_name', 'mobile_phone', 'email', 'creation_time', 'update_time']});
    return {
        code: 200,
        data: result,
        msg: '获取用户列表成功'
    }
  }

}

