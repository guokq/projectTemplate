import axios from './api'   

/**
 * 将所有接口统一起来便于维护
 * 如果项目很大可以将 URL 独立成文件，接口分成不同的模块
 */
export const query = params =>{
     return axios({
          url: '/api/lottery/lottery.do',
          method : 'get' , 
          params
     })
}

export const mock = params =>{
     return axios({
          url : '/mock' , 
          method : 'get' , 
          params 
     });
}

export const upload = data =>{
     return axios({
          url: '/lottery/lottery.do',
          method : 'post' , 
          data 
     })
}

export default {
     query , 
     mock , 
     upload 
}