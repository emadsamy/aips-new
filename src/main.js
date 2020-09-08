import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $ from "jquery";
import bootstrap from "bootstrap";
window.baseURL = "https://api.mazadak.net/api/v1";
window.$ = $;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
