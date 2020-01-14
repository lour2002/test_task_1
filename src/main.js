// Styles
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Vue from 'vue';
import Vuex from 'vuex';
import { BootstrapVue } from 'bootstrap-vue';
import App from './App.vue';
import Store from './store';

// Install BootstrapVue
Vue.use(BootstrapVue);
Vue.use(Vuex);

Vue.config.productionTip = false;

const store = new Vuex.Store(Store);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
