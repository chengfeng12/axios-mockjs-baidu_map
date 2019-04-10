<template>
  <div class="hello">
    <router-link to="/login">
        <a>登录</a>
    </router-link>
    <router-link to="/baiduMap">
      <a>百度地图</a>
    </router-link>
    <router-link to="/mocktest">
      <a>mock数据页</a>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>

</style>
