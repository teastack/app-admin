<template>
  <div class="role_list">
    <div>
        <Row v-for="val in row.permissionList" :key="val.label">
            <Col span="4">
                <Tag type="dot" closable color="primary" @on-close="handleClose">{{val.name}}</Tag>
                <Icon type="md-arrow-dropright" v-if='val.children.length !== 0'/>
            </Col>
            <Col span="20">
                <Row  v-for="val2 in val.children" :key="val2.label">
                    <Col span="4">
                      <Tag type="dot" closable color="success">{{val2.name}}</Tag>
                      <Icon type="md-arrow-dropright" v-if='val2.children.length !== 0'/>
                    </Col>
                    <Col span="20">
                        <Tag type="dot" v-for="val3 in val2.children" :key="val3.label" closable color="warning">{{val3.name}}</Tag>
                    </Col>
                </Row>
            </Col>
        </Row>
        <span v-if='row.permissionList.length === 0'>该角色还没有分配任何的权限</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'role-detailed',
  data () {
    return {
    }
  },
  props: {
    row: Object
  },
  created () {
  },
  mounted () {
  },
  methods: {
    handleClose () {
      console.log('关闭')
      console.log(this.row)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
