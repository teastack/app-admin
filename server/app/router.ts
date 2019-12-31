import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, jwt } = app;

  // app
  router.get('/', controller.home.index);
  router.post('/login', controller.login.index);
  router.post('/register', controller.app.user.register);
  router.get('/message_list', controller.app.home.messageList);
  router.get('/message_own', jwt, controller.app.home.messageOwn);
  router.get('/user_info', jwt, controller.app.user.userInfo);
  router.post('/add_message', jwt, controller.app.home.addMessage);
  router.post('/del_message', jwt, controller.app.home.delMessage);

  // admin
  router.get('/user', controller.admin.user.index);
  router.get('/user_list', jwt, controller.admin.user.userList);
};
