import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import state from './state'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 内存数据状态，UI可通过this.$store.state.* 获得数据
  state,
  // 同步操作，唯一拥有更改内存数据的接口，使用方法 this.$store.commit('mutations里面的方法')带参数this.$store.commit('mutations里面的方法',额外参数)
  mutations,
  // 异步操作mutation的方法，使用方法 this.$store.dispatch('actions里面的方法', 传参)
  actions,
  // 实时监听state值的变化(最新状态),和vue计算属性computed一样，来实时监听state值的变化(最新状态),state的值() {}
  getters
})

export default store
