/**
 * 首页
 * @author LiZhiXian
 * @data 2015-11-10
 */
require.config({
  baseUrl: '/BootStrapApp/dist/js/lib',
  paths: {
    'main': 'main'
  }
});

require(['main'],function(Main){
  $('p').css('color','red');
  Main.setCookie('lzx','123456');
  console.log(Main.getCookie('lzx'));
  Main.delCookie('lzx');
  console.log(Main.getCookie('lzx'));
});
