<template>
  <div class="app-personal">
    <move-ico :ico="ico" @click.native="goHome"></move-ico>
  </div>
</template>

<script>

import moveIco from '@/components/app/move-ico'
import Api from '@/api'

export default {
  name: 'app-personal',
  data () {
    return {
      ico: '#icon-icon-test'
    }
  },
  components: {
    moveIco
  },
  methods: {
    goHome () {
      this.$router.push({name: 'app-home'})
    }
  },
  created () {
    Api.appApi.getUserInfo().then(res => {
      console.log(res)
    })
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#drag_personal {
  position: absolute;
}
</style>
