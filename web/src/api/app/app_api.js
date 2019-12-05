import axios from 'axios'

const getUserList = (params) => {
  return axios.get('user_list', params).then((result) => {
    return result.data
  })
}

export default {
  getUserList
}
