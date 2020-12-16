import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/tailwind.css';

window.axios = require('axios');

// Vue.config.productionTip = false

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')