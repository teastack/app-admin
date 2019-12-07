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

Vue.use(Vant)
Vue.use(ViewUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
