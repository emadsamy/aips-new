import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
window.baseURL = 'https://api.mazadak.net/api/v1';
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap-vue/dist/bootstrap-vue.css"
// Vue.use(BootstrapVue)
createApp(App).use(store).use(router).mount('#app')
