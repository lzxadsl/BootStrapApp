/**
 * Created by lizx on 2015/11/10 0010.
 * 主模块,存放公共函数
 */
define(['html5shiv.min','respond.min','jquery.min'],function(){
  $.extend({
    add:function(arg){
      alert(arg);
    }
  });
  return {
    test:function(){
      alert('test');
    }
  }
});

