/**
 * 系统公共JS文件、公共函数统一引用入口
 * @author LiZhiXian
 * @data 2015-11-10
 */

//系统公共JS文件对象
var common_js_files = [
  '/BootStrapApp/dist/js/lib/html5shiv.min.js',
  '/BootStrapApp/dist/js/lib/respond.min.js',
  '/BootStrapApp/dist/js/lib/jquery.min.js',
  '/BootStrapApp/dist/js/lib/bootstrap.min.js'
];
define(common_js_files,function(){
  return {//公共函数
    getBrowserMsg:function(){
      /**
       * 获取浏览器类型
       */
      var Sys = {};
      var ua = navigator.userAgent.toLowerCase();
      var s;
      (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
          (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
              (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
                  (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
                      (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
      return Sys
    },
    setCookie:function(name, value){//设置名称为name,值为value的Cookie
      var expdate = new Date();   //初始化时间
      expdate.setTime(expdate.getTime() + 30 * 60 * 1000);//时间
      document.cookie = name+'='+value+';expires='+expdate.toGMTString()+';path=/';
      //即document.cookie= name+"="+value+";path=/";   时间可以不要，但路径(path)必须要填写，
      //因为JSookie只的默认路径是当前页，如果不填，此cookie只在当前页面生效！~
    },
    getCookie:function(name){//读取名称为name的cookies
      var arr,reg=new RegExp('(^| )'+name+'=([^;]*)(;|$)');
      if(arr=document.cookie.match(reg)){
        return unescape(arr[2]);
      }else{
        return null;
      }
    },
    delCookie:function(name){//删除名称为name的Cookie
      var exp = new Date();
      exp.setTime(exp.getTime() - 10000);//为了删除指定名称的cookie，可以将其过期时间设定为一个过去的时间
      document.cookie = name + '= ""; expires=' + exp.toGMTString()+';path=/';
    }
  }
});

