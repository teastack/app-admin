<template>
  <div class="app-personal">
    <move-ico :ico="ico" @click.native="goHome"></move-ico>
    <div class="personal-top" :style="{background: 'url(' + (userInfo.bg_img_url ? Config.baseURL + userInfo.bg_img_url : '~@/assets/images/bg_moren.jpg') + ') no-repeat center center', 'background-size': '100% 100%'}">
      <div class="user">
        <img :src="Config.baseURL + userInfo.img_url" alt="">
        <div class="right">
          <p class="nick">茶栈</p>
          <p class="autograph">{{userInfo.autograph}}</p>
        </div>
      </div>
    </div>
    <div class="personal-cen">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          :error.sync="error"
          finished-text="君，回忆多了伤神哦，今天就到这吧~"
          error-text="啊哦，页面好像跑丢了，点击呼唤Ta回来~"
          @load="onLoad"
        >
        <ul>
          <li v-for="val in messageOwn" :key="val.id">
            <p>
              <span>{{val.creation_time | day}}日</span>
              <span>/</span>
              <span>{{val.creation_time | month}}月</span>
            </p>
            <div>
              <p>{{val.message}}</p>
              <div>
                <img  v-lazy="Config.baseURL + val_img" v-for="(val_img, index) in val.img_url" :key="index" @click="imagePreview(val.img_url, index)">
              </div>
              <span @click="del(val.id)">删除</span>
            </div>
          </li>
        </ul>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>

import moveIco from '@/components/app/move-ico'
import { ImagePreview } from 'vant'
import Api from '@/api'

export default {
  name: 'app-personal',
  data () {
    return {
      ico: '#icon-icon-test',
      userInfo: {},
      page: 1,
      pageSize: 15,
      messageOwn: [],
      total: 0,
      dataTotal: 0,
      finished: false,
      isLoading: false, // 下拉刷下
      loading: false, // 上拉加载
      error: false
    }
  },
  components: {
    moveIco
  },
  methods: {
    init () {
      // 获取用户个人信息
      Api.appApi.getUserInfo().then(res => {
        if (res.code === 200) {
          this.userInfo = res.data[0]
        }
      })
      // 获取用户个人留言列表
      Api.appApi.getMssageOwn({pageSize: this.pageSize * this.page}).then(res => {
        if (res.code === 200) {
          this.total = res.data.count
          this.dataTotal = res.data.rows.length
          res.data.rows.forEach(element => {
            element.img_url = JSON.parse(element.img_url)
          })
          this.messageOwn = res.data.rows
        }
      }).catch(() => {
        this.error = true
      })
    },
    goHome () {
      this.$router.push({name: 'app-home'})
    },
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
    },
    onRefresh () {
      // 重置数据
      this.page = 1
      this.pageSize = 15
      setTimeout(() => {
        this.init()
        this.$toast('刷新成功')
        this.isLoading = false
      }, 500)
    },
    // 上拉加载更多
    onLoad () {
      this.page++
      setTimeout(() => {
        // 加载状态结束
        this.loading = false
        if (this.total === this.dataTotal) {
          // 数据全部加载完成,将不再触发上拉加载更多
          this.finished = true
        } else {
          this.init()
        }
      }, 500)
    },
    del (val) {
      this.$dialog.confirm({
        message: '确定要删除吗？'
      }).then(() => {
        Api.appApi.delMssageInfo({id: val}).then(res => {
          if (res.code === 200) {
            // 重置数据
            this.page = 1
            this.pageSize = 15
            this.init()
            this.$toast(res.msg)
          }
        }).catch(() => {
          this.$toast('删除失败')
        })
      })
    }
  },
  created () {
    this.init()
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
            padding-top: .1rem;
          }
        }
      }
    }
    .personal-cen {
      padding-top: 2rem;
      li {
        width: 100%;
        overflow: hidden;
        display: flex;
        >p {
          width: 20%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #fff;
          span:nth-child(1) {
            font-weight: 700;
          }
        }
        >div {
          width: 80%;
          background-color: #fff;
          >div {
            padding-top: .2rem;
            img {
              width: 25%;
              border-radius: 5px;
            }
          }
          span {
            color: skyblue;
          }
        }
      }
    }
  }
</style>
