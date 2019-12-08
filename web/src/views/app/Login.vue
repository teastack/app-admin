<template>
  <div class="app-login">
    <van-button round type="info" @click="login">登录</van-button>
  </div>
</template>

<script>
import Api from '@/api'

export default {
  name: 'app-login',
  data () {
    return {
      msg: 'app登录'
    }
  },
  methods: {
    login () {
      console.log('login')
      const userInfo = {
        user_name: 'jack',
        pass_word: '123456'
      }
      Api.appApi.login(userInfo).then(res => {
        console.log(res)
      }).catch(err => {
        console.log('请求出错')
        console.log(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
