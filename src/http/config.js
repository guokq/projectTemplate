export default {
     methods: 'post',
     baseURL: '', //基础URL前缀
     headers: { //请求头信息
          'Content-Type': 'application/json;charset=UTF-8'
     },
     data: {}, //参数
     timeout: 10000, //设置超时时间
     withCredentials: false, //携带凭证 
     responseType: 'JSON'
}