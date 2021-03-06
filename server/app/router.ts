import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/login', controller.login.index);
  router.get('/user_list', controller.admin.user.userList);
};
