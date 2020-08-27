import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import JQuery from 'jquery'
import bootstrap from 'bootstrap'
window.baseURL = 'https://api.mazadak.net/api/v1';
window.$ = JQuery

createApp(App).use(store).use(router).mount('#app')
