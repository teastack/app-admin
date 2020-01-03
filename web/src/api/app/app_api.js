import axios from '../index'

// 用户登录
const login = (params) => {
  return axios.post('login', params).then((result) => {
    return result.data
  })
}

// 用户注册
const register = (params) => {
  return axios.post('register', params).then((result) => {
    return result.data
  })
}

// 获取用户个人信息
const getUserInfo = (pa) => {
  return axios.get('user_info', {params: pa}).then((result) => {
    return result.data
  })
}

// 获取用户个人留言列表
const getMssageOwn = (pa) => {
  return axios.get('message_own', {params: pa}).then((result) => {
    return result.data
  })
}

// 获取全部留言列表
const getMssageList = (pa) => {
  return axios.get('message_list', {params: pa}).then((result) => {
    return result.data
  })
}

// 添加留言信息
const addMssageInfo = (params) => {
  return axios.post('add_message', params).then((result) => {
    return result.data
  })
}

// 删除留言信息
const delMssageInfo = (params) => {
  return axios.post('del_message', params).then((result) => {
    return result.data
  })
}

export default {
  login,
  register,
  getMssageList,
  addMssageInfo,
  getUserInfo,
  getMssageOwn,
  delMssageInfo
}
