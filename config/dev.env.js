'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // 配置请求地址的前缀
  BASE_API: 'http://localhost:3000/api'
})
