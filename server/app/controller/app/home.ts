import { Controller } from 'egg';

export default class AppHomeController extends Controller {
  public async addMessage() {
    const { ctx } = this;
    await ctx.service.home.addMessage();
  }
}
