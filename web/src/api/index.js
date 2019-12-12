import axios from 'axios'
import adminApi from './admin/admin_api'
import appApi from './app/app_api'

// api基准路径
const baseURL = 'http://127.0.0.1:7001/'

// axios添加基准路径
axios.defaults.baseURL = baseURL

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
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

export default {
  adminApi,
  appApi
}
