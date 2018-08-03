import Login from '../views/Login.vue'   //登录页面
import NotFound  from '../views/404.vue'  //404页面
import Main from '../views/main.vue'  //main页面
import Home from '../views/Home.vue' //首页

let routes = [
		{
			path : '/login' , 
			component : Login  , 
			name : '' , 
			hidden : true 
		},{
			path : '/main' , 
			component : Main , 
			hidden : true 
		},{
			path : '/' , 
			component : Home , 
			iconCls : 'el-icon-message'  , //图标样式 
			name : '测试导航' , 
			children : [
				{
					path : 'test1' , 
					component : Main  , 
					name : '测试1'
				} ,
				{
					path : 'test2' , 
					component : Main  , 
					name : '测试2'
				},
				{
					path : 'test3' , 
					component : Main  , 
					name : '测试3'
				}
			]	
		},{
			path : '/404' , 
			component : NotFound , 
			name : '' , 
			hidden : true 
		} , {
			path : '*' , 
			hidden : true , 
			redirect : {path : '/404'}
		} 
	]


export default routes ; 



