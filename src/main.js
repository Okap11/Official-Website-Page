import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueRouter from 'vue-router'
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueRouter)

axios.defaults.baseURL = 'http://localhost:3000'

Vue.prototype.$axios = axios


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
