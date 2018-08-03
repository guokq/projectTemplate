<template>
  <div id="app">
    <transition name="fade"
                mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {
    }
  }
</script>

<style>
html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,dir,acronym,address,big,cite,code,del,dfn,em,font,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td{margin:0px; padding:0px; border:0px; outline:0; font-size:14px; vertical-align:baseline; background:transparent;}
body {margin: 0px;padding: 0px;font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;font-size: 14px; -webkit-font-smoothing: antialiased;background:#eee;}
ul,ol,ul{list-style:none;}
blockquote,q{quotes:none;}
blockquote:before,blockquote:after,q:before,q:after{content:""; content:none;}
:focus{outline:0;-moz-outline-style: none;}
ins{text-decoration:none;}
del{text-decoration:line-through;}
table{border-collapse:collapse; border-spacing:0; table-layout:fixed;}
img{vertical-align:middle;border:0;}
address, caption, cite, code, dfn, em, th, var {font-weight:normal;font-style:normal;}
select{ border:1px solid #B5BCC2;}
input,textarea,select{font-family:Arial; vertical-align:middle;}
input[type=checkbox],input[type=radio]{top:-2px;*top:0px;}
.clear { clear:both;height:0;overflow:hidden}
a{text-decoration:none;cursor: pointer;}
a{outline-style:none;color:#333;text-decoration:none;}
a:visited{}
a:active{}
a:hover{text-decoration:none;color: #5ca7ff;}
.clearfix{}
.clearfix:after{content:".";height:0px;font-size:0px;clear:both;display:block;visibility:hidden;}
#app {position: absolute;top: 0px;bottom: 0px;width: 100%;}
.el-submenu[class^=fa]{vertical-align: baseline;margin-right: 10px;}
.el-menu-item [class^=fa] {
  vertical-align: baseline;
  margin-right: 10px;
}
.toolbar{
  background: #f2f2f2;
  padding: 10px;
/*  //border:1px solid #dfe6ec;*/
  margin: 10px 0px;  
}
.toolbar .el-form-item {
  margin-bottom: 10px;
}
.fade-enter-active,.fade-leave-active {transition: all .2s ease;}
.fade-enter,.fade-leave-active{opacity: 0;}
</style>
