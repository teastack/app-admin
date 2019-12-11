import axios from 'axios'

const getUserList = (params) => {
  return axios.get('user_list', params).then((result) => {
    return result.data
  })
}

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

export default {
  getUserList,
  login,
  register
}
