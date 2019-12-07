<template>
  <div class="app-personal">
    <div id="drag_personal" ref='drag_personal' @click="goHome">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-icon-test1"></use>
      </svg>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app-personal',
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
      console.log('go首页')
      this.$router.push({name: 'app-home'})
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
      this.dx = this.$refs.drag_personal.offsetLeft
      this.dy = this.$refs.drag_personal.offsetTop
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
        this.$refs.drag_personal.style.left = x + 'px'
        this.$refs.drag_personal.style.top = y + 'px'
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
    this.clientWidth = document.body.clientWidth - this.$refs.drag_personal.offsetWidth
    this.clientHeight = document.body.clientHeight - this.$refs.drag_personal.offsetHeight
    this.$refs.drag_personal.style.left = this.clientWidth + 'px'
    this.$refs.drag_personal.style.top = 0 + 'px'
    const _this = this
    this.$refs.drag_personal.addEventListener('mousedown', function (e) {
      _this.down(e)
    }, false)
    this.$refs.drag_personal.addEventListener('touchstart', function (e) {
      _this.down(e)
    }, false)
    this.$refs.drag_personal.addEventListener('mousemove', function (e) {
      _this.move(e)
    }, false)
    this.$refs.drag_personal.addEventListener('touchmove', function (e) {
      _this.move(e)
    }, false)
    this.$refs.drag_personal.addEventListener('mouseup', function (e) {
      _this.end(e)
    }, false)
    this.$refs.drag_personal.addEventListener('touchend', function (e) {
      _this.end(e)
    }, false)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#drag_personal {
  position: absolute;
}
</style>
