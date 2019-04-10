import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import BaiduMap from '@/components/BaiduMap'
import Mock from '@/components/MockTest'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/baiduMap',
      name: 'BaiduMap',
      component: BaiduMap
    },
    {
      path: '/mocktest',
      name: 'Mock',
      component: Mock
    }
  ]
})
