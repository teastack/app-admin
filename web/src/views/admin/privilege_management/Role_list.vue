<template>
  <div class="role_list">
    <Button type="success" class="add_btn" ghost @click="modal = true">添加角色</Button>
    <Table :columns="columns10" border :data="roleList"></Table>

  <!-- 权限选择模态框 -->
    <Modal
      v-model="modal"
      :title="modalTitle"
      @on-ok="ok"
      @on-cancel="cancel">
      <p>Content of dialog</p>
      <p>Content of dialog</p>
      <p>Content of dialog</p>
    </Modal>
  </div>
</template>

<script>

import Api from '@/api/admin/admin_api'
import expandRow from './Role_detailed'

export default {
  name: 'role-list',
  data () {
    return {
      roleList: [],
      columns10: [
        {
          type: 'expand',
          tooltip: true,
          width: 50,
          render: (h, params) => {
            return h(expandRow, {
              props: {
                row: params.row
              }
            })
          }
        },
        {
          title: '名称',
          key: 'name'
        },
        {
          title: '描述',
          key: 'desc'
        },
        {
          title: '操作',
          key: 'operation',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small',
                  icon: 'md-create'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.show(params.index)
                  }
                }
              }, '编辑'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.remove(params.index)
                  }
                }
              }, '删除')
            ])
          }
        }
      ],
      modal: false,
      modalTitle: '添加角色'
    }
  },
  methods: {
    show (index) {
    },
    remove (index) {
      this.roleList.splice(index, 1)
    },
    ok () {
      this.$Message.info('Clicked ok')
    },
    cancel () {
      this.$Message.info('Clicked cancel')
    }
  },
  created () {
    Api.getRoleList().then(res => {
      if (res.code === 200) {
        for (const key in res.data) {
          if (res.data.hasOwnProperty(key)) {
            if (res.data[key].permission_id === 'all') {
              let rootPermissionsResult = {}
              let PermissionList = this.$store.state.PermissionList
              // 处理第一级菜单
              for (const key in PermissionList) {
                if (PermissionList.hasOwnProperty(key)) {
                  const permission = PermissionList[key]
                  if (permission.permission_id === 0) {
                    rootPermissionsResult[permission.id] = {
                      label: permission.id,
                      name: permission.name,
                      children: []
                    }
                  }
                }
              }
              // 处理第二级
              for (const key in PermissionList) {
                if (PermissionList.hasOwnProperty(key)) {
                  const permission = PermissionList[key]
                  if (permission.level === '1') {
                    const parentPermissionResult = rootPermissionsResult[permission.permission_id]
                    if (parentPermissionResult) {
                      parentPermissionResult.children.push({
                        label: permission.id,
                        name: permission.name,
                        children: []
                      })
                    }
                  }
                }
              }
              // 处理第三级
              for (const key in PermissionList) {
                if (PermissionList.hasOwnProperty(key)) {
                  const permission = PermissionList[key]
                  if (permission.level === '2') {
                    for (const key2 in rootPermissionsResult) {
                      if (rootPermissionsResult.hasOwnProperty(key2)) {
                        for (const key3 in rootPermissionsResult[key2].children) {
                          if (rootPermissionsResult[key2].children.hasOwnProperty(key3)) {
                            if (rootPermissionsResult[key2].children[key3].label === permission.permission_id) {
                              rootPermissionsResult[key2].children[key3].children.push({
                                label: permission.id,
                                name: permission.name
                              })
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              rootPermissionsResult = Object.values(rootPermissionsResult)
              res.data[key].permissionList = rootPermissionsResult
            }
          }
        }
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
.role_list {
  padding: 10px;
  .add_btn {
    margin-bottom: 10px;
  }
  .expand-row{
      margin-bottom: 16px;
  }
}
</style>
