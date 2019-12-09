<template>
  <div class="app-login">
    <div class="from">
      <van-cell-group>
        <van-field
          v-model="userInfo.user_name"
          required
          clearable
          label="用户名"
          placeholder="请输入用户名"
          :error-message="user_nameErr"
        />

        <van-field
          v-model="userInfo.pass_word"
          type="password"
          label="密码"
          clearable
          placeholder="请输入密码"
          :error-message="pass_wordErr"
          required
        />
      </van-cell-group>

      <van-button slot="button" size="small" type="primary" class="login" @click="login">登录</van-button>
    </div>
  </div>
</template>

<script>
import Api from '@/api'

export default {
  name: 'app-login',
  data () {
    return {
      userInfo: {
        user_name: '',
        pass_word: ''
      },
      user_nameErr: '',
      pass_wordErr: ''
    }
  },
  methods: {
    login () {
      if (!this.userInfo.user_name) {
        this.user_nameErr = '请输入用户名'
      } else if (!this.userInfo.pass_word) {
        this.user_nameErr = ''
        this.pass_wordErr = '请输入密码'
      } else {
        this.user_nameErr = ''
        this.pass_wordErr = ''
        Api.appApi.login(this.userInfo).then(res => {
          if (res.code === 200) {
            // 储存token
            this.$store.commit('mytoken', res.data.token)
            this.$router.push({name: 'app-home'})
          }
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.app-login {
    width: 100%;
    height: 100%;
    background: url('~@/assets/images/teastack.png') no-repeat;
    background-size: 100% 100%;
    .from {
      position: absolute;
      top: 45%;
      left: 1rem;
      .login {
        margin-top: .3rem;
      }
    }
}
</style>
