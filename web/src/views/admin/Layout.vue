<template>
    <div class="layout">
        <Layout>
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu theme="dark" ref="menu" width="auto" :class="menuitemClasses" :accordion="accordion">
                    <Submenu :name="val.label" v-for="val in menuList" :key="val.label">
                        <template slot="title">
                            <Icon type="ios-navigate" />
                            <span>{{val.name}}</span>
                        </template>
                        <MenuItem :name="val2.label" v-for="val2 in val.children" :key="val2.label">
                            <Icon type="ios-paper"></Icon>
                            <span>{{val2.name}}</span>
                        </MenuItem>
                    </Submenu>
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
                    <router-link to="/admin/login">
                      <Button type="info" >退出</Button>
                    </router-link>
                </Header>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
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
      accordion: true
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
    }
  },
  created () {
    Api.getMenuList().then((res) => {
      console.log(res)
      if (res.code === 200) {
        this.menuList = res.data
      }
    })
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
