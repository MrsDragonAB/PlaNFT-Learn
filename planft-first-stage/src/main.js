import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './plugins/element.js'
// import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
require('./styles/index.css')


Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$store = axios
Vue.use(ElementUI)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
