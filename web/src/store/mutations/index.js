const mutations = {
  userInfo (state, data) { // 自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
    state.userInfo = data
  },
  mytoken (state, data) {
    state.token = data
  }
}

export default mutations
