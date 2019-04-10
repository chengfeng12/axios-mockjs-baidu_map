<template>
    <!-- 地图组件渲染完毕时触发，返回一个百度地图的核心类和地图实例。百度地图组件是异步加载，请不要尝试在组件的生命周期中访问 BMap 核心类和 map 实例， -->
    <!-- 如有需要，请在所需组件的 ready 事件回调函数的参数中获取。 -->
    <!-- :scroll-wheel-zoom="true" 滚轮缩放 -->
    <!-- mapType="BMAP_SATELLITE_MAP" 卫星地图 -->
    <baidu-map class="bm" :center="center" :zoom="zoom" @ready="handler" :scroll-wheel-zoom="true">
        <!-- <p style="padding: 0 10px;">以下是使用 `bm-view` 组件渲染的百度地图实例</p>
        <bm-view style="width: 100%; height: 400px; flex: 1"></bm-view> -->
    </baidu-map>
</template>

<script>
export default {
    data() {
        return {
            center: {lng: 120, lat: 30},
            zoom: 3
        }
    },
    methods: {
        handler({ BMap, map }) {
            console.log(BMap, map)
            this.center.lng = 110
            this.center.lat = 35
            this.zoom = 15
        }
    }
}
</script>

<style>
.bm {
    width: 70%;
    height: 400px;
}
</style>
