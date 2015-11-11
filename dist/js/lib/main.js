/**
 * 系统公共函数
 * @author LiZhiXian
 * @data 2015-11-10
 */

define('main',['jquery'],function(){
  return {//公共函数
    alert:function(){
      //alert 提示

      var title = arguments[0] ? arguments[0] : "提示";
      var show_msg = arguments[1] ? arguments[1] : "";  //提示信息
      var callback_fun = arguments[2] ? arguments[2] : "";  //回调方法
      var width = arguments[3] ? arguments[3] : "250";
      var height = arguments[4] ? arguments[4] : "150";
      var oDiv= null;
      oDiv=document.createElement("div");
      oDiv.innerHTML='<div class="modal fade" id="open_autoInv_alert" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="border-radius:5px;">'
          +'<div class="modal-dialog" style="margin-top: 12%;">'
          +'	<div style="width:'+width+'px;height:'+height+'px;background: #fff;border-radius:5px;margin: 0 auto;">'
          +'	 	<div align="left" style="height:30px;padding: 5px;border-radius:5px;font-size: 18px;font-weight:bold;">'+ title
          +'	 		<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
          +'			<span aria-hidden="true">×</span></button>'
          +'	 	</div>'
          +'	 	<div align="left" style="font-size: 16px;border-top: 1px solid #ccc;border-bottom: 0px dotted #ccc;height:65px;">'
          +'			<div style="color: #666;margin-left: 30px;margin-top:5px;">'+show_msg
          +'			</div>'
          +'		</div>'
          +'		<div class="modal-footer">'
          +'			<button type="button" class="btn btn-default" onclick="$(\'#open_autoInv_alert\').modal(\'toggle\');">确认</button>'
          +'		</div>'
          +'	</div>'
          +'</div>'
          +'</div>';
      document.body.appendChild(oDiv); //装载弹出层
      $("#open_autoInv_alert").modal({
        backdrop:'static',
        keyboard:false
      });
      //关闭事件
      $('#open_autoInv_alert').on('hidden.bs.modal', function (e) {
        var win_alert_div=document.getElementById("open_autoInv_alert");
        if(win_alert_div != null){
          win_alert_div.parentNode.removeChild(win_alert_div);
        }
        if(callback_fun != null && callback_fun != ""){
          window[callback_fun]();
        }
      });
    },
    serializeJsonObj:function(formId){//根据表单id获取表单数据 ,返回类型为json对象
      var serializeObj = {};
      var array = $('#'+formId).serializeArray();
      $(array).each(function(){
        if(serializeObj[this.name]){
          if($.isArray(serializeObj[this.name])){
            serializeObj[this.name].push(this.value);
          }else{
            serializeObj[this.name]=[serializeObj[this.name],this.value];
          }
        }else{
          serializeObj[this.name]=this.value;
        }
      });
      return serializeObj;
    },
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

