import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import VueMeta from 'vue-meta';
import './index.css'
import VueDateFns from "vue-date-fns";
import VueSocialSharing from 'vue-social-sharing'
import nandosRoutes from './routes.js';

Vue.use(VueRouter);
Vue.use(VueDateFns);
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
});
Vue.use(VueSocialSharing);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: nandosRoutes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
