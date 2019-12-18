export default [
  {
    path: 'test',
    name: 'app-test',
    component: resolve => require(['@/views/app/Test'], resolve)
  },
  {
    path: 'login',
    name: 'app-login',
    component: resolve => require(['@/views/app/Login'], resolve)
  },
  {
    path: 'register',
    name: 'app-register',
    component: resolve => require(['@/views/app/Register'], resolve)
  },
  {
    path: 'home',
    name: 'app-home',
    component: resolve => require(['@/views/app/Home'], resolve)
  },
  {
    path: 'personal',
    name: 'app-personal',
    component: resolve => require(['@/views/app/Personal'], resolve)
  },
  {
    path: 'message',
    name: 'app-message',
    component: resolve => require(['@/views/app/HomeDetailed/message'], resolve)
  }
]
