import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, jwt } = app;
  
  router.get('/', controller.home.index);
  router.post('/login', controller.login.index);
  router.post('/register', controller.app.user.register);
  router.get('/user_list', jwt, controller.admin.user.userList);
};
