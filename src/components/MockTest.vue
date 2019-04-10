<template>
    <div>
        <label for="name">姓名：</label>
        <input type="text" name="use" v-model="name" id="name"><br>
        <label for="age">姓名：</label>
        <input type="text" name="age" v-model="age" id="age"><br>
        <button id="sub" @click="sub">提交</button>
    </div>
</template>

<script>
import axios from '../utils/request'
export default {
     data () {
        return {
            name:'',
            age:''
        }
    },
    methods: {
        sub: function (){
            console.log('我是')
            console.log(this.name)
            axios({
                url:'/mock',
                method:'post',
                data: {
                    name: this.name,
                    age: this.age
                }
            }).then(res=>{
                console.log(res.data.token)
            }).catch(err=>{
                console.log('我出错了')
            })
        }
    }
}
</script>

<style>

</style>
