import Vue from 'vue'
import Router from 'vue-router'
import app from './app/app_router' // app的路由模块
import admin from './admin/admin_router' // 管理后台的路由模块

// console.log(admin)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app-loyou',
      component: resolve => require(['@/views/app/Loyou'], resolve),
      redirect: {'name': 'app-home'},
      children: [
        ...app
      ]
    },
    {
      path: '/admin',
      name: 'admin-Loyou',
      component: resolve => require(['@/views/admin/Loyou'], resolve),
      redirect: {'name': 'admin-home'},
      children: [
        ...admin
      ]
    }
  ]
})
