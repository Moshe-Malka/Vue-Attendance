import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './routes/router.js'
import store from './store/index.js'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
