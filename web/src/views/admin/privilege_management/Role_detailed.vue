<template>
  <div class="role_list">
    <div>
        <!-- <Row class="expand-row">
            <Col span="8">
                <span class="expand-key">Job: </span>
                <span class="expand-value">{{ row.job }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">Interest: </span>
                <span class="expand-value">{{ row.interest }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">Birthday: </span>
                <span class="expand-value">{{ row.birthday }}</span>
            </Col>
        </Row>
        <Row>
            <Col span="8">
                <span class="expand-key">Favorite book: </span>
                <span class="expand-value">《{{ row.book }}》</span>
            </Col>
            <Col span="8">
                <span class="expand-key">Favorite movie: </span>
                <span class="expand-value">{{ row.movie }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">Favorite music: </span>
                <span class="expand-value">{{ row.music }}</span>
            </Col>
        </Row> -->
        <div class="tag">
            <div class="tag1">
            <Tag type="dot" closable color="primary" @on-close="handleClose">标签一</Tag>
            </div>
            <div class="tag2">
            <Tag type="dot" closable color="success">标签二</Tag>
            </div>
            <div class="tag3">
            <Tag type="dot" closable color="warning">标签三</Tag>
            </div>
        </div>
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .expand-row{
        margin-bottom: 16px;
    }
    .tag {
        display: flex
    }
</style>
