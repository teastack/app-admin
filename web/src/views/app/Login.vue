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

      <div>
        <van-button slot="button" size="small" type="primary" class="login" @click="login">登录</van-button>
        <a class="register fr" @click="$router.push({name: 'app-register'})">注册</a>
      </div>
    </div>
  </div>
</template>

<script>

import Api from '@/api/app/app_api'

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
        Api.login(this.userInfo).then(res => {
          if (res.code === 200) {
            this.$notify({ type: 'success', message: `${res.msg}` })
            // 储存token
            localStorage.setItem('token', `Bearer ${res.data[0].token}`)
            this.$store.commit('userInfo', res.data[0].user_info)
            this.$router.push({name: 'app-home'})
          } else {
            this.$notify({ type: 'primary', message: `${res.msg}` })
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
      .register {
        margin-top: .3rem;
        line-height: 28px;
        margin-right: 0.8rem;
      }
    }
}
</style>
