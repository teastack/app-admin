<template>
  <div class="login">
    <div class="form">
      <h2 class="h2">xxx后台管理系统</h2>
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
          <FormItem prop="user">
              <Input type="text" v-model.trim="formInline.user" placeholder="Username">
                  <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
          </FormItem>
          <FormItem prop="password">
              <Input type="password" v-model.trim="formInline.password" placeholder="Password" @keyup.enter.native="handleSubmit('formInline')">
                  <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
          </FormItem>
          <FormItem>
              <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
          </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'admin-login',
  data () {
    return {
      formInline: {
        user: '123456',
        password: '123456'
      },
      ruleInline: {
        user: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { type: 'string', min: 6, max: 16, message: '用户不能小于6位', trigger: 'blur' },
          { validator: this.validator, trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' },
          { validator: this.validator, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 用户名校验
    validator (rule, value, callback) {
      if (!(/^[a-zA-Z0-9_]{1,16}$/.test(value))) {
        callback(new Error('16位内(字母,数字,下划线)'))
      } else {
        callback()
      }
    },
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          console.log(this.formInline)
          this.$router.push({name: 'admin-index'})
          this.$Message.success('Success!')
        } else {
          this.$Message.error('请填写完整信息!')
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.login {
  width: 100%;
  height: 100%;
  background-color: #515a6e;
  position: relative;
  .form {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -60%);
    .h2 {
      font-size: 20px;
      padding: 20px;
      text-align: center;
      color: #fff;
      font-weight: bold
    }
  }
}
</style>
