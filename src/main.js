import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.use(VueAxios, axios);

new Vue({
  el: '#app',
  router,
  store,
  icons,
  template: '<App/>',
  components: {
    App
  }
})
