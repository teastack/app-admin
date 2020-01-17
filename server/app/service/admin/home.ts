import { Service } from 'egg';

export default class AdminHome extends Service {

    // 获取权限列表
    async getMenuList() {
        // 获取权限列表
        await this.ctx.model.Permission.findAll({
            where: {
                status: 1,
            },
            attributes: [ 'id', 'name', 'level', 'permission_id' ],
        }).then(res => {
            this.ctx.body = this.ctx.rendata(200, res, '获取权限列表');
        }).catch(err => {
            throw err;
        });
    }

    /*
    * 获取角色列表
    */
    async roleList() {
        await this.ctx.model.Role.findAll({
            where: {
                status: 1,
            },
            attributes: [ 'id', 'name', 'desc', 'permission_id' ],
            raw: true,
        }).then(res => {
            this.ctx.body = this.ctx.rendata(200, res, '获取角色列表');
        }).catch(err => {
            throw err;
        });
    }
}
