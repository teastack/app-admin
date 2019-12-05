import { Service } from 'egg';

/**
 * Test Service
 */
export default class User extends Service {

  /**
   * 获取用户列表
   */
  async getUserList() {
    const res = await this.app.mysql.select('user');
    return {
        code: 200,
        data: res,
        desc: '获取用户列表成功'
    }
  }

}

