// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/style/index.less'
import '@/assets/style/iconfont/iconfont'

// 导入vantUI框架组件
import Vant from 'vant'
import 'vant/lib/index.css'
// 导入view
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

// 引入store
import store from '@/store'

Vue.use(Vant)
Vue.use(ViewUI)

Vue.config.productionTip = false

// 在页面加载时读取localStorage里的状态信息
if (localStorage.getItem('data')) {
  store.replaceState(Object.assign({}, store.state, JSON.parse(localStorage.getItem('data'))))
}
// 页面刷新把vuex里面的数据储存到localStorage
window.addEventListener('beforeunload', () => {
  localStorage.setItem('data', JSON.stringify(store.state))
})

// 添加路由全局守卫
router.beforeEach((to, from, next) => {
  // 判断是app还是后台管理
  const isAdmin = to.path.indexOf('admin') > -1 ? 1 : 0
  // 1.获取令牌：token
  const token = store.getters.mytoken
  // 如果token有值，说明曾经登陆地 ，说明拥有合法访问的令牌
  if (token) {
    next()
  } else {
    // 如果是访问默认可以访问的页，如登陆，那么也不需要有令牌
    if (to.path === '/login' || to.path === '/home' || to.path === '/admin/login' || to.path === '/register') { // 判断是不是访问登陆页面
      next()
    } else {
      if (isAdmin) {
        next({path: '/admin/login'})
      } else {
        next({path: '/login'})
      }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
