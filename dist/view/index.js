/**
 * Created by lizx on 2015/11/10 0010.
 */
require.config({
  baseUrl: '../dist/js',
  paths: {
    'main': 'main'
  }
});

require(['main'],function(main){
  $('p').css('color','red');
  main.test();
});
