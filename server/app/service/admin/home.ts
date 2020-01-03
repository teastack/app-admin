import { Service } from 'egg';

export default class AdminHome extends Service {

    // 获取管理系统菜单
    async getMenuList() {
        this.ctx.body = this.ctx.state.user; // 从jwt验证中获取用户id
    }
}
