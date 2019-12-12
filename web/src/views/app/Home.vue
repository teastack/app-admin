<template>
  <div class="app-home">
    <div id="drag" ref='drag' @click="goHome">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-icon-test"></use>
      </svg>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app-home',
  data () {
    return {
      flag: false,
      cur: {
        x: 0,
        y: 0
      },
      nx: undefined,
      n: undefined,
      d: undefined,
      x: undefined,
      y: undefined,
      dx: undefined,
      dy: undefined,
      clientWidth: undefined,
      clientHeight: undefined
    }
  },
  methods: {
    goHome () {
      console.log('go个人中心')
      this.$router.push({name: 'app-personal'})
    },
    down (event) {
      this.flag = true
      let touch
      if (event.touches) {
        touch = event.touches[0]
      } else {
        touch = event
      }
      this.cur.x = touch.clientX
      this.cur.y = touch.clientY
      this.dx = this.$refs.drag.offsetLeft
      this.dy = this.$refs.drag.offsetTop
    },
    move (event) {
      if (this.flag) {
        let touch
        if (event.touches) {
          touch = event.touches[0]
        } else {
          touch = event
        }
        this.nx = touch.clientX - this.cur.x
        this.ny = touch.clientY - this.cur.y
        let x = this.dx + this.nx
        let y = this.dy + this.ny
        if (x <= 0) {
          x = 0
        } else if (x >= this.clientWidth) {
          x = this.clientWidth
        }
        if (y <= 0) {
          y = 0
        } else if (y >= this.clientHeight) {
          y = this.clientHeight
        }
        this.$refs.drag.style.left = x + 'px'
        this.$refs.drag.style.top = y + 'px'
        // 阻止页面的滑动默认事件
        document.addEventListener('touchmove', function () {
          event.preventDefault()
        }, false)
      }
    },
    end () {
      this.flag = false
    }
  },
  created () {
  },
  mounted () {
    console.log('挂载完成')
    this.clientWidth = document.body.clientWidth - this.$refs.drag.offsetWidth
    this.clientHeight = document.body.clientHeight - this.$refs.drag.offsetHeight
    const _this = this
    this.$refs.drag.addEventListener('mousedown', function (e) {
      _this.down(e)
    }, false)
    this.$refs.drag.addEventListener('touchstart', function (e) {
      _this.down(e)
    }, false)
    this.$refs.drag.addEventListener('mousemove', function (e) {
      _this.move(e)
    }, false)
    this.$refs.drag.addEventListener('touchmove', function (e) {
      _this.move(e)
    }, false)
    this.$refs.drag.addEventListener('mouseup', function (e) {
      _this.end(e)
    }, false)
    this.$refs.drag.addEventListener('touchend', function (e) {
      _this.end(e)
    }, false)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#drag {
  position: absolute;
}
</style>
