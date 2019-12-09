export default [
  {
    path: 'home',
    name: 'admin-home',
    component: resolve => require(['@/views/admin/Home'], resolve)
  },
  {
    path: 'login',
    name: 'admin-login',
    component: resolve => require(['@/views/admin/Login'], resolve)
  }
]
