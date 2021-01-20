import Vue from "vue";
import App from "./App.vue";

import Contadores from "./components/Contadores";

Vue.component("app-contadores", Contadores);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
