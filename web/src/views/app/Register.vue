<template>
  <div class="app-register">
    <!-- 返回头部 -->
    <van-nav-bar
    title="注册"
    left-arrow
    @click-left="$router.go(-1)"/>

    <!-- 注册表单 -->
    <van-cell-group>
        <van-field
            v-model="userInfo.user_name"
            required
            clearable
            label="用户名"
            placeholder="请输入用户名"
            :error-message="user_nameError"
            maxlength="16"
            @input="txtChange(userInfo.user_name, 'user_name')"
        />

        <van-field
            v-model="userInfo.nick_name"
            clearable
            label="昵称"
            maxlength="16"
            placeholder="请输入昵称"
        />

        <van-field
            v-model="userInfo.mobile_phone"
            required
            clearable
            label="手机号码"
            maxlength="12"
            type="number"
            placeholder="请输入手机号码"
            @input="txtChange(userInfo.mobile_phone, 'mobile_phone')"
            :error-message="mobile_phoneError"
        />

        <van-field
            v-model="userInfo.pass_word"
            type="password"
            label="登录密码"
            placeholder="请输入密码"
            required
            maxlength="20"
            @input="txtChange(userInfo.pass_word, 'pass_word')"
            :error-message="pass_wordError"
        />

        <van-field
            v-model="userInfo.pass_word2"
            type="password"
            label="再次输入密码"
            placeholder="请再次输入密码"
            required
            maxlength="16"
            @blur="txtChange(userInfo.pass_word2, 'pass_word2')"
            :error-message="pass_word2Error"
        />
    </van-cell-group>

    <!-- 注册按钮 -->
    <div class="register" @click="goRegister">
        立即注册
    </div>
  </div>
</template>

<script>
import Api from '@/api'

export default {
  name: 'app-register',
  data () {
    return {
      userInfo: {},
      user_nameError: '',
      mobile_phoneError: '',
      pass_wordError: '',
      pass_word2Error: '',
      user_namOk: false,
      mobile_phoneOk: false,
      pass_wordOk: false,
      pass_word2Ok: false
    }
  },
  methods: {
    // 用户输入验证
    txtChange (val, type) {
      switch (type) {
        case 'user_name':
          if (!(/^[a-zA-Z0-9_]{1,16}$/.test(val))) {
            this.user_nameError = '16位内(字母,数字,下划线)'
            this.user_namOk = false
          } else {
            this.user_namOk = true
            this.user_nameError = ''
          }
          break
        case 'mobile_phone':
          if (!(/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(val))) {
            this.mobile_phoneError = '手机号码不正确'
            this.mobile_phoneOk = false
          } else {
            this.mobile_phoneOk = true
            this.mobile_phoneError = ''
          }
          break
        case 'pass_word':
          if (!(/^[a-zA-Z0-9_]{6,20}$/.test(val))) {
            if (val.length < 6) {
              return
            }
            this.pass_wordError = '6 ~ 20(字母,数字,下划线)'
            this.pass_wordOk = false
          } else {
            this.pass_wordOk = true
            this.pass_wordError = ''
          }
          break
        case 'pass_word2':
          if (this.userInfo.pass_word !== this.userInfo.pass_word2) {
            this.pass_word2Error = '与第一次密码不一致'
            this.pass_word2Ok = false
          } else {
            this.pass_word2Ok = true
            this.pass_word2Error = ''
          }
          break
        default:
      }
    },
    // 注册
    goRegister () {
      const registerOk = this.registerOk()
      if (!registerOk) {
        return
      }
      let Obj = Object.assign({}, this.userInfo)
      delete Obj.pass_word2
      Api.appApi.register(Obj).then(res => {
        if (res.code === 200) {
          this.$notify({ type: 'success', message: `${res.msg}` })
          Api.appApi.login({
            user_name: this.userInfo.user_name,
            pass_word: this.userInfo.pass_word
          }).then(res => {
            if (res.code === 200) {
              // 储存token
              localStorage.setItem('token', `Bearer ${res.data[0].token}`)
              this.$store.commit('userInfo', res.data[0].user_info)
              // 延迟2S跳转首页
              const _this = this
              setTimeout(() => {
                _this.$router.push({name: 'app-home'})
                _this.$notify({ type: 'success', message: `${res.msg}` })
              }, 1500)
            }
          })
        } else {
          this.$notify({ type: 'primary', message: `${res.msg}` })
        }
      })
    },
    // 能否进去注册
    registerOk () {
      if (!this.user_namOk) {
        this.user_nameError = '16位内(字母,数字,下划线)'
        return false
      } else if (!this.mobile_phoneOk) {
        this.mobile_phoneError = '手机号码不正确'
        return false
      } else if (!this.pass_wordOk) {
        this.pass_wordError = '6 ~ 20(字母,数字,下划线)'
        return false
      } else if (!this.pass_word2Ok) {
        this.pass_word2Error = '与第一次密码不一致'
        return false
      }
      return true
    }
  }
}
</script>

<style scoped lang="less">
.app-register {
    /deep/ .van-nav-bar .van-icon {
        color: #323233
    }
    .register {
        width: 50%;
        height: .88rem;
        margin: .5rem auto;
        color: #fff;
        border-radius: .44rem;
        line-height: .88rem;
        text-align: center;
        background: #07c160;
    }

}
</style>
