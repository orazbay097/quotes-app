import Vue from 'vue'
import App from './App.vue'
import store from './store'

import apiService from "./services/api.service"

apiService.init(process.env.VUE_APP_BASE_URL)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
