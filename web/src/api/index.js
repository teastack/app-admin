import axios from 'axios'
// import adminApi from './admin/admin_api'
// import appApi from './app/app_api'
import Config from '@/Config'

// api基准路径
// axios添加基准路径
axios.defaults.baseURL = Config.baseURL + '/'

// 添加api拦截器
axios.interceptors.request.use(function (config) {
  // 在请求发送之前你想做的事情
  // 我们要将token这个值通过请求头的方式传递给服务器
  // 1.获取token
  const token = localStorage.getItem('token')
  if (token) {
    // 2.将值传递到服务器
    // console.log(config):Authorization是后台接口与前台调用约定好的值，不能随意修改
    config.headers['Authorization'] = token
    config.headers['Content-Type'] = 'application/json; charset=UTF-8'
  }
  return config
}, function (error) {
  console.log('请求出错')
  // Do something with request error
  return Promise.reject(error)
})

export default axios
// export default {
//   adminApi,
//   appApi
// }
