export default [
  {
    path: 'layout',
    name: 'admin-layout',
    component: resolve => require(['@/views/admin/Layout'], resolve),
    redirect: {'name': 'admin-home'},
    children: [
      {
        path: 'home',
        name: 'admin-home',
        component: resolve => require(['@/views/admin/Home'], resolve)
      }
    ]
  },
  {
    path: 'login',
    name: 'admin-login',
    component: resolve => require(['@/views/admin/Login'], resolve)
  }
]
