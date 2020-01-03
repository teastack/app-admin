import { Controller } from 'egg';

export default class AdminHomeController extends Controller {

    public async index() {
        await this.ctx.service.admin.home.getMenuList();
    }
}
