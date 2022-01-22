import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import { Alert } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.prototype.$Alert = { size: "small", zIndex: 3000 };
Vue.use(Alert);

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
