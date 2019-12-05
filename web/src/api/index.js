import axios from 'axios'
import adminApi from './admin/admin_api'
import appApi from './app/app_api'

// api基准路径
const baseURL = 'http://127.0.0.1:7001/'

// axios添加基准路径
axios.defaults.baseURL = baseURL

// 获取用户列表
// 实现用户登陆验证
export default {
  adminApi,
  appApi
}
