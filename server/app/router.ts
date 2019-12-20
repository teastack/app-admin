import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, jwt } = app;
  
  // app
  router.get('/', controller.home.index);
  router.post('/login', controller.login.index);
  router.post('/register', controller.app.user.register);
  router.get('/message_list', controller.app.home.messageList);
  router.get('/user_info', jwt, controller.app.user.userInfo);
  router.post('/add_message', jwt, controller.app.home.addMessage);

  // admin
  router.get('/user_list', jwt, controller.admin.user.userList);
};
