import { Controller } from 'egg';

export default class AppHomeController extends Controller {

  // 全部留言列表
  public async messageList() {
    const { ctx } = this;
    await ctx.service.home.messageList();
  }

  // 用户个人留言列表
  public async messageOwn() {
    const { ctx } = this;
    await ctx.service.home.messageOwn();
  }

  // 添加留言
  public async addMessage() {
    const { ctx } = this;
    await ctx.service.home.addMessage();
  }

  // 删除留言
  public async delMessage() {
    const { ctx } = this;
    await ctx.service.home.delMessage();
  }
}
