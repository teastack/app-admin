<template>
  <div class="app-home">
    <move-ico :ico="ico" @click.native="goPersonal"></move-ico>
    <!-- 发表留言按钮 -->
    <div class="add-message">
      <van-icon name="add-o" class="add-ico" @click="goMessage"/>
    </div>

    <!-- 留言内容 -->
    <div class="message-info">
      <ul>
        <li v-for="(val, index) in messageList" :key="index">
          <div class="img">
            <!-- <img :src="baseURL + val.user.img_url" alt=""> -->
            <img v-lazy="baseURL + val.user.img_url" alt="">
          </div>
          <div class="info">
            <h2>{{val.user.nick_name}}</h2>
            <p>{{val.message}}</p>
            <div class="info-img">
              <!-- <img :src="baseURL + val2" alt="" v-for="(val2, index) in val.img_url" :key="index" @click="imagePreview(val.img_url, index)"> -->
              <img  v-lazy="baseURL + val2" alt="" v-for="(val2, index) in val.img_url" :key="index" @click="imagePreview(val.img_url, index)">
            </div>
            <p style="font-size: .16rem;">{{val.creation_time}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import moveIco from '@/components/app/move-ico'
import Api from '@/api'
import { ImagePreview } from 'vant'

export default {
  name: 'app-home',
  data () {
    return {
      ico: '#icon-icon-test1',
      baseURL: 'http://127.0.0.1:7001',
      messageList: []
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
    },
    // 预览图片
    imagePreview (imgArr, index) {
      let arr = []
      for (const key in imgArr) {
        if (imgArr.hasOwnProperty(key)) {
          arr.push(this.baseURL + imgArr[key])
        }
      }
      ImagePreview({
        images: arr,
        startPosition: index,
        onClose () {
          // do something
        }
      })
    }
  },
  created () {
    Api.appApi.getMssageList().then(res => {
      if (res.code === 200) {
        res.data.forEach(val => {
          if (val.img_url) {
            val.img_url = JSON.parse(val.img_url)
          }
        })
        this.messageList = res.data
      } else {
        this.$notify({ type: 'primary', message: `${res.msg}` })
      }
    })
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.app-home {
  overflow: auto;
  .add-message {
    position: fixed;
    .add-ico {
      font-size: 2em;
      margin-left: .1rem;
      line-height: .68rem;
    }
  }
  .message-info {
    padding-top: .68rem;
    ul {
      li {
        display: flex;
        padding-bottom: .1rem;
        padding: .1rem .1rem;
        border-bottom: 1px solid #eee;
        &:nth-last-child(1) {
          border-bottom: none;
        }
        .img {
          width: .8rem;
          height: .8rem;
          border-radius: .1rem;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .info {
          width: 85%;
          padding-left: .2rem;
          h2 {
            font-weight: 600;
            line-height: .5rem;
            padding-left: .1rem;
            padding-top: .1rem;
          }
          p {
            max-height: 3.36rem;
            overflow: hidden;
          }
          .info-img {
            img {
              width: 1.6rem;
              height: 1.6rem;
              margin-left: .1rem;
              border-radius: .1rem;
            }
          }
        }
      }
    }
  }
}
</style>
