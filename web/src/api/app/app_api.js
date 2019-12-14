import axios from 'axios'

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

// 添加留言信息
const addMssageInfo = (params) => {
  return axios.post('add_message', params).then((result) => {
    return result.data
  })
}

export default {
  login,
  register,
  addMssageInfo
}
