import { Service } from 'egg';

/**
 * Test Service
 */
export default class Login extends Service {
  /**
   * 用户登录
   */
  async login(data) {
    const md5 = require('crypto').createHash('md5');

    const repeatedData = await this.ctx.model.User.findAll({
      where: {
        user_name: data.user_name,
      },
      raw: true,
    });
    if (repeatedData && repeatedData.length > 0) {
      const pass_word = md5.update(data.pass_word).digest('hex');
      if (repeatedData[0].stauts === '0') {
        return {
          code: 999,
          data: [],
          msg: '用户已注销',
         };
      } else if (pass_word !== repeatedData[0].pass_word) {
        return {
          code: 999,
          data: [],
          msg: '密码不正确',
        };
      } else {
        // 生成token
        const token = this.app.jwt.sign({
          userid: repeatedData[0].id, // 需要存储的 token 数据
          username: data.user_name, // 需要存储的 token 数据
        }, this.app.config.jwt.secret);
        // 返回 token 到前端
        // 去除密码返回信息前端
        const { ...result } = repeatedData[0];
        delete result.pass_word;
        return {
            code: 200,
            data: [{
              user_info: result,
              token,
            }],
            msg: '登录成功',
        };
      }
    } else {
      return {
          code: 999,
          data: [],
          msg: '用户不存在',
      };
    }
  }

}
