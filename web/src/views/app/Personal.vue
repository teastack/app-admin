<template>
  <div class="app-personal">
    <move-ico :ico="ico" @click.native="goHome"></move-ico>
    <div class="personal-top" :style="{background: 'url(' + (userInfo.bg_img_url ? Config.baseURL + userInfo.bg_img_url : '@/assets/images/bg_moren.jpg') + ') no-repeat center center', 'background-size': '100%'}">
      <div class="user">
        <img :src="Config.baseURL + userInfo.img_url" alt="">
        <div class="right">
          <p class="nick">茶栈</p>
          <p class="autograph">{{userInfo.autograph}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import moveIco from '@/components/app/move-ico'
import Api from '@/api'

export default {
  name: 'app-personal',
  data () {
    return {
      ico: '#icon-icon-test',
      userInfo: {}
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
      if (res.code === 200) {
        this.userInfo = res.data[0]
        console.log(this.userInfo)
      }
    })
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .app-personal {
    .personal-top {
      height: 3.6rem;
      position: relative;
      .user {
        position: absolute;
        left: .6rem;
        bottom: -.6rem;
        img {
          width: 1rem;
          height: 1rem;
          border-radius: 5px;
          overflow: hidden;
          vertical-align: middle;
        }
        .right {
          display: inline-block;
          vertical-align: middle;
          box-sizing: border-box;
          padding-left: .2rem;
          .nick {
            font-weight: bold
          }
          .autograph {
          }
        }
      }
    }
  }
</style>
