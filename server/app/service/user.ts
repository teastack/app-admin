import { Service } from 'egg';

export default class User extends Service {

  /**
   * 获取用户列表
   */
  public async List() {
    const result: any = await this.ctx.model.User.findAll({attributes: ['id', 'user_name', 'nick_name', 'mobile_phone', 'email', 'creation_time', 'update_time']});
    return {
        code: 200,
        data: result,
        msg: '获取用户列表成功'
    }
  }

  /*
  * 注册
  */ 
 public async register() {
   console.log('register-service')
   console.log(this.ctx.request.body)
   const parameter = this.ctx.request.body;
   if (!(/^[a-zA-Z0-9_]{1,16}$/.test(parameter.user_name))) {
    return {
      code: 999,
      data: 'user_name',
      msg: '用户名格式不正确(字母,数字,下划线)'
    } 
   } else if (!(/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(parameter.mobile_phone))) {
    return {
      code: 999,
      data: 'mobile_phone',
      msg: '手机号码不正确'
    } 
   } else if (!(/^[a-zA-Z0-9_]{6,20}$/.test(parameter.pass_word))){
    return {
      code: 999,
      data: 'pass_word',
      msg: '密码格式不正确(字母,数字,下划线)'
    }
   }

   return {
    code: 200,
    data: '注册成功',
    msg: '注册成功'
  }
 }

}

