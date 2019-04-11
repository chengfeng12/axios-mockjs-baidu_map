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
    <h2>我下面的是elementUI</h2>
    <div class="block">
      <span class="demonstration">默认 Hover 指示器触发</span>
      <el-carousel height="150px">
        <el-carousel-item v-for="item in imgs" :key="item.bg">
          <img :src="item.bg" class="image"  width="100%">
        </el-carousel-item>
      </el-carousel>
    </div>
    <h2>{{ imgs[0].bg }}</h2>
    <img src="@/assets/image/1.jpg" alt="">
    <img src="../assets/image/1.jpg" alt="">
    <div id="wep">
      <span>哈哈哈</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgs: [
        {
          bg: require('@/assets/image/1.jpg')
        },
        {
          bg: require('@/assets/image/2.jpg')
        },
        {
          bg: require('@/assets/image/3.jpg')
        },
        {
          bg: require('@/assets/image/4.jpg')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
 .el-carousel {
    width: 70%;
 }
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  #wep {
    width: 300px;
    height: 50px;
    background-color: #369;
    span {
      color: #fff;
      display: inline-block;
      text-align: center;
      width: 100%;
      height: 100%;
      line-height: 50px;
    }
  }
</style>
