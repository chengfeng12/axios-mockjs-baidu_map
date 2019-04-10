import axios from 'axios'
import Vue from 'vue'

 // 创建axios实例
const service = axios.create({
    baseURL: "http://localhost:3000/api", // api 的 base_url
    timeout: 5000 // 请求超时时间
})

// 拦截器用于权限判断
// service.interceptors.request.use(function(config) {
//     return config;
//   }, function(error) {
//     return Promise.reject(error);
//   })
//   // 响应拦截器
//   service.interceptors.response.use(function(response) {
//   return response;
// }, function(error) {
//   return Promise.reject(error);
// })

export default service