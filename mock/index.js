// 引入 mock 文件
import Mock from 'mockjs'
import testAPI from './test'

// 返回的接口数据 第三个参数是一个函数的返回值
// console.log(testAPI.info())
// 这个地方的接口使用 '/api/mock' 报404错  正则的话也不用写api \/api\/api
Mock.mock(/\/mock/, 'post', testAPI.info)