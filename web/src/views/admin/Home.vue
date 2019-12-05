<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Button type="primary">Primary</Button>
  </div>
</template>

<script>
// 引入 api接口
import Api from '@/api'
export default {
  name: 'admin-home',
  data () {
    return {
      msg: 'admin首页'
    }
  },
  mounted () {
    console.log(Api)
    Api.adminApi.getUserList().then(res => {
      console.log(res)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
