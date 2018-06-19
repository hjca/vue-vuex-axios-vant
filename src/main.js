import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
Vue.prototype.$ajax = axios;

import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload,{
  preLoad: 1.3,
  error: require('./static/images/error.jpg'),
  loading: require('./static/images/loading.gif')
});

// 引用公共js
import Screen from './static/commonJS/sizerem';
Screen();

// 引用公共样式
import './static/commonCSS/reset.css'
import 'vant/lib/vant-css/index.css'

//模拟数据
require('./util/mockData');

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
