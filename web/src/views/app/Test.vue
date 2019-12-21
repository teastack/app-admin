<template>
  <div>
    <button @click="show = !show">
      Toggle
    </button>
    <p :class="['p', {'a': show}]">hello</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    click () {
      this.isShow = false
    }
  },
  mounted () {
  }
}
</script>

<style scoped lang="less">
.p {
  width: 100%;
  height: 0px;
  visibility: hidden;
  background-color: pink;
  position: fixed;
  bottom: 0;
  left: 0;
}
.a {
  visibility: visible;
  height: 100px;
  transition: height 5s;
}
</style>
