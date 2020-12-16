import { createApp } from "vue";

import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";

// import store from "./store";
import router from "./router";

import "./styles/main.scss";

createApp(App).use(router).use(VueAxios, axios).mount("#app");
