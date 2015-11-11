/**
 * 首页
 * @author LiZhiXian
 * @data 2015-11-10
 */
require.config({
  baseUrl: '/BootStrapApp/dist/js/lib',
  shim:{
    'bs3':['jquery']
  },
  paths: {
    'jquery':'jquery.min',
    'bs3':'bootstrap.min'
  }
});

require(['main','bs3'],function(Main){
  Main.setCookie('lzx','123456');
  console.log(Main.getCookie('lzx'));
  Main.delCookie('lzx');

});


