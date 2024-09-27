import axios from 'axios'
import { getToken } from './token'

const request = axios.create({
  headers: {}
})

request.interceptors.request.use(async config => {
  const token = getToken()
  // if (!token) {}
  config.headers['X-Token'] = token
  return config
})

request.interceptors.response.use(response => {
  return response
})

export default request
