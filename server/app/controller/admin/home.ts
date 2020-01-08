import { Controller } from 'egg';

export default class AdminHomeController extends Controller {

    public async index() {
        // const idx = this.ctx.state.user;
        // console.log(idx);
        // await this.ctx.model.AdminUser.findOne({ id: idx, row: true }).then(res => {
        //     this.ctx.body = res;
        // });
        await this.ctx.service.admin.home.getMenuList();
    }
}
