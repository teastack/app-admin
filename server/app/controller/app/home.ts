import { Controller } from 'egg';

export default class AppHomeController extends Controller {

  // 留言列表
  public async messageList() {
    const { ctx } = this;
    await ctx.service.home.messageList();
  }

  // 添加留言
  public async addMessage() {
    const { ctx } = this;
    await ctx.service.home.addMessage();
  }
}
