import { Controller } from 'egg';

export default class AdminHomeController extends Controller {

    /*
    * 获取权限列表
    */
    public async permissionList() {
        await this.ctx.service.admin.home.getMenuList();
    }

    /*
    * 获取角色列表
    */
    public async roleList() {
        await this.ctx.service.admin.home.roleList();
    }
}
