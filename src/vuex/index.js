import Vue from 'vue' 
import Vuex from 'vuex' 

Vue.use(Vuex) 

// 创建 store 实例
export default new Vuex.Store({
    state : {
        domain : 'http://www.baidu.com'  , 
        userInfor : null , 
        isLoading : false 
    } , 
    mutations : {
        updateUserInfo(state, newUserInfo) {
            state.userInfor = newUserInfo;
        },
    }
})


