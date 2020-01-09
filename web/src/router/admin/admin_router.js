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
        meta: { title: '首页', icon: 'ios-home-outline' },
        component: resolve => require(['@/views/admin/Home'], resolve),
        children: []
      },
      {
        path: 'privilege_management',
        name: 'privilege-management',
        meta: { title: '权限管理', icon: 'ios-home-outline' },
        component: resolve => require(['@/views/admin/privilege_management'], resolve),
        children: [
          {
            path: 'role_list',
            name: 'role-list',
            meta: { title: '角色列表', icon: 'logo-buffer' },
            component: resolve => require(['@/views/admin/privilege_management/Role_list'], resolve)
          },
          {
            path: 'permission_list',
            name: 'permission-list',
            meta: { title: '权限列表', icon: 'logo-buffer' },
            component: resolve => require(['@/views/admin/privilege_management/permission_list'], resolve)
          }
        ]
      },
      {
        path: 'user_management',
        name: 'user-management',
        meta: { title: '用户管理', icon: 'ios-home-outline' },
        component: resolve => require(['@/views/admin/user_management'], resolve),
        children: [
          {
            path: 'user_list',
            name: 'user-list',
            meta: { title: '角色列表', icon: 'logo-buffer' },
            component: resolve => require(['@/views/admin/user_management/User_list'], resolve)
          }
        ]
      }
    ]
  },
  {
    path: 'login',
    name: 'admin-login',
    component: resolve => require(['@/views/admin/Login'], resolve)
  }
]
