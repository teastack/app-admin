export default [
  {
    path: 'login',
    name: 'app-login',
    component: resolve => require(['@/views/app/Login'], resolve)
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
  }
]
