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
        <li>
          <div class="img">
            <img src="~@/assets/images/user.png" alt="">
          </div>
          <div class="info">
            <h2>teastack</h2>
            <p>定传值给子组件,子组件的图片url在img标签的src属性中相对路径写死的。(...
简书社区 - 百度快照
为您推荐：vue img动态路径vue中src目录vue中srcimg标签的src路径格式img相对地址src路径img src图片不显示img标签src绝对路径
vue img :src拼接问题 - Demon的回答 - SegmentFault 思否
2018年11月2日 - vue img :src拼接问题 vue.js 4.7k 次浏览 问题对人有帮助,内容完</p>
            <div class="info-img">
              <img src="~@/assets/images/teastack.png" alt="">
              <img src="~@/assets/images/user.png" alt="">
            </div>
          </div>
        </li>
      </ul>
    </div>
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
        border-bottom: 1px solid #eee;
        &:nth-last-child(1) {
          border-bottom: none;
        }
        .img {
          width: .8rem;
          height: .8rem;
          margin: .1rem;
          border-radius: .1rem;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .info {
          width: 85%;
          h2 {
            font-weight: 600;
            line-height: .5rem;
            padding-left: .1rem;
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
