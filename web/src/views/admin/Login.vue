<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="getUserList">获取用户列表</button>
  </div>
</template>

<script>
// 引入 api接口
import Api from '@/api'

export default {
  name: 'admin-login',
  data () {
    return {
      msg: '管理后台登录'
    }
  },
  methods: {
    getUserList () {
      Api.adminApi.getUserList().then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
