<template>
  <div class="index">
      <router-view/>
  </div>
</template>

<script>

export default {
  name: 'admin-index',
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.index {
    width: 100%;
    height: 100%;
}
</style>
