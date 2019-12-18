<template>
  <div class="app-home">
    <move-ico :ico="ico" @click.native="goPersonal"></move-ico>
    <!-- 发表留言按钮 -->
    <div class="add-message">
      <van-icon name="add-o" class="add-ico" @click="goMessage"/>
    </div>

    <!-- 留言内容 -->
    <div id="list-content">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          :error.sync="error"
          finished-text="君，阅读多了伤神哦，今天就到这吧~"
          error-text="啊哦，页面好像跑丢了，点击呼唤Ta回来~"
          @load="onLoad"
        >
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
        </van-list>
      </van-pull-refresh>
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
      messageList: [],
      page: 1,
      pageSize: 15,
      total: 0, // 留言列表总数
      dataTotal: 0, // 留言列表当前总数
      isLoading: false, // 下拉刷下
      loading: false, // 上拉加载
      finished: false, // 上拉数据是否加载完毕 为false时，将不会再去触发load事件
      error: false
    }
  },
  components: {
    moveIco
  },
  methods: {
    // 获取留言列表
    getMessageList () {
      Api.appApi.getMssageList({pageSize: this.pageSize * this.page}).then(res => {
        if (res.code === 200) {
          this.total = res.data.count
          this.dataTotal = res.data.rows.length
          res.data.rows.forEach(val => {
            if (val.img_url) {
              val.img_url = JSON.parse(val.img_url)
            }
          })
          this.messageList = res.data.rows
        } else {
          this.$notify({ type: 'primary', message: `${res.msg}` })
        }
      }).catch(() => {
        this.error = true
      })
    },
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
    },
    // 下拉刷新
    onRefresh () {
      // 充值数据
      this.page = 1
      this.pageSize = 15
      setTimeout(() => {
        this.getMessageList()
        this.$toast('刷新成功')
        this.isLoading = false
      }, 500)
    },
    // 上拉加载更多
    onLoad () {
      this.finished = false
      this.page++
      this.getMessageList()
      setTimeout(() => {
        // 加载状态结束
        this.loading = false
        if (this.total === this.dataTotal) {
          // 数据全部加载完成,将不再触发上拉加载更多
          this.finished = true
        }
      }, 500)
    }
  },
  created () {
    this.getMessageList()
  },
  mounted () {
    let winHeight = document.documentElement.clientHeight // 视口大小
    document.getElementById('list-content').style.height = winHeight + 46 + 'px' // 调整上拉加载框高度
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.app-home {
  overflow: auto;
  .add-message {
    position: fixed;
    z-index: 998;
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
