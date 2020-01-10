import { Service } from 'egg';

export default class AdminHome extends Service {

    // 获取管理系统菜单
    async getMenuList() {
        // 获取权限列表
        const PermissionList = await this.ctx.model.Permission.findAll();
        this.ctx.body = this.ctx.rendata(200, PermissionList, '获取操作菜单');
    }
}
