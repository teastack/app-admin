<template>
  <div>
    <div class="message-info">
      <ul>
        <li v-for="(val, index) in messageList" :key="index">
          <div class="img">
            <img v-lazy="Config.baseURL + val.user.img_url" alt="">
          </div>
          <div class="info">
            <h2>{{val.user.nick_name}}</h2>
            <p>{{val.message}}</p>
            <div class="info-img">
              <img  v-lazy="Config.baseURL + val2" alt="" v-for="(val2, index) in val.img_url" :key="index" @click="imagePreview(val.img_url, index)">
            </div>
            <p style="font-size: .16rem;">{{val.creation_time | timeago}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ImagePreview } from 'vant'

export default {
  data () {
    return {
    }
  },
  props: ['messageList'],
  methods: {
    // 预览图片
    imagePreview (imgArr, index) {
      let arr = []
      for (const key in imgArr) {
        if (imgArr.hasOwnProperty(key)) {
          arr.push(this.Config.baseURL + imgArr[key])
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
  mounted () {
  }
}
</script>

<style scoped lang="less">
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
</style>
