import axios from '../'

const getUserList = (params) => {
  return axios.get('user_list', params).then((result) => {
    return result.data
  })
}

/*
* 获取菜单列表
*/
const getMenuList = (params) => {
  return axios.get('admin/home', params).then((result) => {
    return result.data
  })
}

/*
* 管理员登录
*/
const goLogin = (params) => {
  return axios.post('admin/login', params).then((result) => {
    return result.data
  })
}

export default {
  goLogin,
  getUserList,
  getMenuList
}
