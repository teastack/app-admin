import Vue from 'vue'
import Router from 'vue-router'
import app from './app/app_router' // app的路由模块
import admin from './admin/admin_router' // 管理后台的路由模块
import pc from './pc/pc_router' // pc端的路由模块

/**
 * 重写路由的push方法
 */
const routerPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app-layout',
      component: resolve => require(['@/views/app/Layout'], resolve),
      redirect: {'name': 'app-home'},
      children: [
        ...app
      ]
    },
    {
      path: '/admin',
      name: 'admin-index',
      component: resolve => require(['@/views/admin/Index'], resolve),
      redirect: {'name': 'admin-layout'},
      children: [
        ...admin
      ]
    },
    {
      path: '/pc',
      name: 'pc-layout',
      component: resolve => require(['@/views/pc/Layout'], resolve),
      redirect: {'name': 'pc-home'},
      children: [
        ...pc
      ]
    }
  ]
})
