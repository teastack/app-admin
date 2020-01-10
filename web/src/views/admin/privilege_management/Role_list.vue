<template>
  <div class="role_list">
  </div>
</template>

<script>

import Api from '@/api/admin/admin_api'

export default {
  name: 'role-list',
  data () {
    return {
      roleList: []
    }
  },
  created () {
    Api.getRoleList().then(res => {
      if (res.code === 200) {
        this.roleList = res.data
      }
    })
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .expand-row{
        margin-bottom: 16px;
    }
</style>
