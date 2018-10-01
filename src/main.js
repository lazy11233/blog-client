// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/index.js'

Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.filter('dateFormatter', function(dateStr) {
  let dateObj = typeof dateStr === 'object' ? dateStr : new Date(dateStr);
  let time = dateObj.getTime();
  let now = Date.now();
  let space = now - time;
  let str = '';
  
  switch(true) {
  case space < 60000: 
      str = '刚刚'
      break;
  case space < 1000 * 3600:
      str = Math.floor(space/60000) + '分钟前';
      break;
  case space < 1000* 3600* 24:
      str = Math.floor(space/(1000*3600)) + '小时前';
      break;
  default:
      str = Math.floor(space/(1000*3600* 24)) + '天前';
      break;
  }
  return str;
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, //vuex
  components: { App },
  template: '<App/>'
})
