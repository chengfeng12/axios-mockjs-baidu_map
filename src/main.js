// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入百度地图
import BaiduMap from 'vue-baidu-map'

// 引入mock.js
import '../mock/index'

// 引入elementUI的样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

// 引入Vuex
import store from './store'

Vue.use(BaiduMap, {
  ak: '百度地图的密钥'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
