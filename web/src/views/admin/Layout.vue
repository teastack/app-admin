<template>
    <div class="layout">
        <Layout>
            <!-- 左边菜单栏 -->
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu theme="dark" ref="menu" width="auto" :active-name="activename" :open-names="$store.state.opennames" :class="menuitemClasses" :accordion="accordion">
                    <template v-for="val in router">
                        <MenuItem v-if="val.children.length < 1" :name="val.name" :key="val.name" @click.native="goPath(val.name, val.name)">
                            <Icon type="ios-paper" :key="'2' + val.name"></Icon>
                            <span :key="'3' + val.name">{{ val.meta.title }}</span>
                        </MenuItem>
                        <Submenu :name="val.name" v-if="val.children.length >= 1" :key="val.name">
                            <template slot="title">
                                <Icon type="ios-navigate" />
                                <span>{{val.meta.title}}</span>
                            </template>
                            <MenuItem :name="val2.name" v-for="val2 in val.children" :key="val2.name" @click.native="goPath(val2.name, val.name)">
                                <Icon type="ios-paper"></Icon>
                                <span>{{val2.meta.title}}</span>
                            </MenuItem>
                        </Submenu>
                    </template>
                </Menu>
            </Sider>
            <Layout>
              <!-- 个人logo -->
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 10px'}" type="md-menu" size="24"></Icon>
                    <router-link to="/admin/login">
                      <Button type="info" >退出</Button>
                    </router-link>
                </Header>
                <!-- 面包屑 -->
                <!-- <Breadcrumb style="margin:10px">
                    <BreadcrumbItem to="/admin/layout/home">
                        <Icon type="ios-home-outline"></Icon> Home
                    </BreadcrumbItem>
                    <BreadcrumbItem to="/admin/layout/role_list">
                        <Icon type="logo-buffer"></Icon> 角色列表
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Icon type="ios-cafe"></Icon> Breadcrumb
                    </BreadcrumbItem>
                </Breadcrumb> -->
                <!-- 路由模板 -->
                <Content :style="{margin: '10px', background: '#fff', minHeight: '260px'}">
                  <router-view/>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>

<script>

import Api from '@/api/admin/admin_api'

export default {
  name: 'admin-layout',
  data () {
    return {
      isCollapsed: false,
      menuList: [],
      accordion: true,
      router: [],
      activename: ''
    }
  },
  computed: {
    rotateIcon () {
      return [
        'menu-icon',
        this.isCollapsed ? 'rotate-icon' : ''
      ]
    },
    menuitemClasses () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  },
  methods: {
    collapsedSider () {
      this.$refs.side1.toggleCollapse()
    },
    goPath (val, name) {
      if (this.activename === val) {
        return false
      }
      this.$store.state.opennames = [name]
      this.activename = this.$store.state.rouetr = val
      this.$router.push({name: val})
    }
  },
  created () {
    Api.getMenuList().then((res) => {
      if (res.code === 200) {
        this.$store.state.PermissionList = res.data
        let PermissionList = res.data
        let rootPermissionsResult = {}
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
        rootPermissionsResult = Object.values(rootPermissionsResult)
        this.menuList = rootPermissionsResult
      }
    })
    // 获取管理后台路由表
    for (const key in this.$router.options.routes) {
      if (this.$router.options.routes.hasOwnProperty(key)) {
        if (this.$router.options.routes[key].path === '/admin') {
          for (const key2 in this.$router.options.routes[key].children) {
            if (this.$router.options.routes[key].children.hasOwnProperty(key2)) {
              if (this.$router.options.routes[key].children[key2].path === 'layout') {
                this.router = this.$router.options.routes[key].children[key2].children
              }
            }
          }
        }
      }
    }
    this.activename = this.$store.state.rouetr ? this.$store.state.rouetr : 'admin-home'
    this.$router.push({name: this.$store.state.rouetr})
  },
  destroyed () {
    this.activename = this.$store.state.rouetr = 'admin-home'
    this.$store.state.opennames = ['admin-home']
  }
}
</script>

<style lang="less" scoped>
  .layout{
      height: 100%;
      border: 1px solid #d7dde4;
      background: #f5f7f9;
      position: relative;
      border-radius: 4px;
      overflow: hidden;
  }
  .ivu-layout.ivu-layout-has-sider {
    height: 100%;
  }
  .layout-header-bar{
      background: #fff;
      box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-logo-left{
      width: 90%;
      height: 30px;
      background: #5b6270;
      border-radius: 3px;
      margin: 15px auto;
  }
  .menu-icon{
      transition: all .3s;
  }
  .rotate-icon{
      transform: rotate(-90deg);
  }
  .menu-item span{
      display: inline-block;
      overflow: hidden;
      width: 69px;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: bottom;
      transition: width .2s ease .2s;
  }
  .menu-item i{
      transform: translateX(0px);
      transition: font-size .2s ease, transform .2s ease;
      vertical-align: middle;
      font-size: 16px;
  }
  .collapsed-menu span{
      width: 0px;
      transition: width .2s ease;
  }
  .collapsed-menu i{
      transform: translateX(5px);
      transition: font-size .2s ease .2s, transform .2s ease .2s;
      vertical-align: middle;
      font-size: 22px;
  }
  // /deep/ .ivu-menu-submenu-title-icon {
  //   color: red;
  // }

</style>
