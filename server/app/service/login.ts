import { Service } from 'egg';

/**
 * Test Service
 */
export default class Login extends Service {
    /**
   * 用户登录
   */
  async login(data) {

    // const res = await this.app.mysql.select('user');
    // 生成token
    const token = this.app.jwt.sign({
      username: data.user_name, //需要存储的 token 数据
      }, this.app.config.jwt.secret,{expiresIn: '24h'});
      // 返回 token 到前端
    return {
        code: 200,
        data: {
          token
        },
        msg: '登录成功'
    }
  }

}

