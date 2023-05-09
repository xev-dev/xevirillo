import { library } from "@fortawesome/fontawesome-svg-core";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vue from "vue";
import App from "./App.vue";
import i18n from "./i18n";
import router from "./router";
import store from "./store";
import "./styles/index.scss";

library.add(faLanguage);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
