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
      name: 'app-home',
      component: resolve => require(['@/views/app/Home'], resolve),
      redirect: {'name': 'app-home'},
      children: [
        ...app
      ]
    },
    {
      path: '/admin',
      name: 'admin-home',
      component: resolve => require(['@/views/admin/Home'], resolve),
      redirect: {'name': 'admin-home'},
      children: [
        ...admin
      ]
    }
  ]
})
