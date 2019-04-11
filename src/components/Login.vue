<template>
    <div>
        我是登录页面
        <button @click="btn">点击更改</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: ''
        }
    },
    methods: {
        btn() {
            this.name = '张三中文的'
            // commit 是直接使用 mutations 中的方法
            this.$store.commit('SET_NAME', this.name)
            // dispatch 是直接使用 actions 中的方法
            this.$store.dispatch('SetName', '李四')
            console.log(this.$store.state.name)
        }
    }
}
</script>

<style>

</style>
