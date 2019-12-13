<template>
  <div class="app-message">
    <!-- 返回栏 -->
    <div class="header">
        <van-icon name="arrow-left" class="back" @click="$router.go(-1)"/>
        <span class="publish fr" @click="submit">就这样吧</span>
    </div>

    <!-- 信息内容输入区 -->
    <div class="message">
      <!-- <van-cell-group>
        <van-field v-model="message" placeholder="君, 此刻的心情..." />
      </van-cell-group> -->
      <textarea class="textarea" autofocus="autofocus" maxlength="240" v-model="message" placeholder="君, 此刻的心情..."></textarea>
      <p class="message-max-length">{{messageLength}} / {{messageMaxLength}}</p>
    </div>

    <!-- 图片上传 -->
    <van-uploader
      v-model="fileList"
      multiple
      :max-count="2"
      :before-read="beforeRead"
      class="uploader-img"
    />
  </div>
</template>

<script>
export default {
  name: 'app-message',
  data () {
    return {
      message: '',
      messageLength: 0,
      messageMaxLength: 240,
      fileList: []
    }
  },
  watch: {
    message (newData, oldData) {
      this.messageLength = newData.length
      if (newData.length === this.messageMaxLength) {
        this.$toast('哎呀！君勿想太多了哦！')
      }
    }
  },
  methods: {
    // 提交发表
    submit () {
      console.log(this.fileList)
      let imgArr = []
      for (const key in this.fileList) {
        if (this.fileList.hasOwnProperty(key)) {
          imgArr.push(this.fileList[key].content)
        }
      }
      console.log(imgArr)
    },
    // 图片校验
    beforeRead (file) {
      if (file.type !== 'image/png' && file.type !== 'image/jpeg') {
        this.$toast('哦豁，伦家喜欢的是png OR jpg呐！')
        return false
      }
      return true
    }
  }
}
</script>

<style scoped lang="less">
.app-message {
    .header {
        height: .7rem;
        padding-top: .1rem;
        .back {
            font-size: 1.5em;
            line-height: .8rem;
        }
        .publish {
            margin-right: .15rem;
            display: inline-block;
            line-height: .7rem;
            color: #fff;
            padding: 0 .15rem;
            border-radius: .05rem;
            background-color: #07c162;
        }
    }
    .message {
      position: relative;
      padding-top: .1rem;
      .textarea {
        height: 4rem;
        border: 0;
        width: 100%;
        padding: 0 .1rem;
        resize:none;
      }
      .message-max-length {
        position: absolute;
        right: .2rem;
        bottom: -.3rem;
      }
    }
    .uploader-img {
      padding: .1rem 0 0 .2rem;
    }
}
</style>
