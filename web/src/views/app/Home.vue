<template>
  <div class="app-home">
    <move-ico :ico="ico" @click.native="goPersonal"></move-ico>
    <van-icon name="add-o" class="add-ico" @click="goMessage"/>
  </div>
</template>

<script>

import moveIco from '@/components/app/move-ico'

export default {
  name: 'app-home',
  data () {
    return {
      ico: '#icon-icon-test1'
    }
  },
  components: {
    moveIco
  },
  methods: {
    // 个人中心
    goPersonal () {
      this.$router.push({name: 'app-personal'})
    },
    // 留言编辑
    goMessage () {
      this.$router.push({name: 'app-message'})
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.add-ico {
  font-size: 2em;
}
</style>
