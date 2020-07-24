import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";

Vue.use(VueRouter);
const routes = [
  { path: "/", component: Home },
  { path: "/About", component: About },
  { path: "/Services", component: Services },
];

const router = new VueRouter({
  routes,
});

Vue.config.productionTip = false;

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
