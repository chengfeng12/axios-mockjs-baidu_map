import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 引入文件
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})