import { Service } from 'egg';

export default class AdminHome extends Service {

    // 获取管理系统菜单
    async getMenuList() {
        // 获取权限列表
        const PermissionList = await this.ctx.model.Permission.findAll();
        let rootPermissionsResult = {};
        // 处理第一级菜单
        for (const key in PermissionList) {
            if (PermissionList.hasOwnProperty(key)) {
                const permission = PermissionList[key];
                if (permission.permission_id === 0) {
                    rootPermissionsResult[permission.id] = {
                        label: permission.id,
                        name: permission.name,
                        children: [],
                    };
                }
            }
        }
        // 处理第二级
        for (const key in PermissionList) {
            if (PermissionList.hasOwnProperty(key)) {
                const permission = PermissionList[key];
                if (permission.level === '1') {
                    const parentPermissionResult = rootPermissionsResult[permission.permission_id];
                    if (parentPermissionResult) {
                        parentPermissionResult.children.push({
                            label: permission.id,
                            name: permission.name,
                            children: [],
                        });
                    }
                }
            }
        }
        rootPermissionsResult = Object.values(rootPermissionsResult);
        this.ctx.body = this.ctx.rendata(200, rootPermissionsResult, '操作菜单');
    }
}
