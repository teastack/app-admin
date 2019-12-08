import axios from 'axios'

const getUserList = (params) => {
  return axios.get('user_list', params).then((result) => {
    return result.data
  })
}

const login = (params) => {
  return axios.post('login', params).then((result) => {
    return result.data
  })
}

export default {
  getUserList,
  login
}
