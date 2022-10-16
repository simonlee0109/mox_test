import Vue from 'vue/dist/vue.js'
import App from './App'
import router from "./router" //引入 router
import './input.css'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router: router,
  render: h => h(App),
})
