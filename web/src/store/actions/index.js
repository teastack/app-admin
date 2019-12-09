const actions = {
  userInfo (context, data) {
    context.commit('userInfo', data) // 自定义触发mutations里函数的方法
  }
}

export default actions
