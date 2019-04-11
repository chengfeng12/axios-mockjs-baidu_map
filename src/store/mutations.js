const mutations = {
    SET_NAME: (state,name)=>{
        console.log('我是mutations中' + name)
        state.name = name
    }
}
export default mutations