<template>
  <div class="pc-home">
    风沙渡，理想家园...

    <router-link to='/admin/home'>
        <Button type="success" >进入后台系统</Button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'pc-home'
}
</script>

<style scoped lang="less">
.pc-home {
  width: 100%;
  height: 100%;
  font-size: 18px;
  line-height: 72px;
  text-indent: 36px;
  color: #fff;
  background: url(~@/assets/images/timg.jpg) no-repeat center center;
}
</style>
