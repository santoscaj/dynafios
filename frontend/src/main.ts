import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// @ts-ignore
import * as VueGoogleMaps from 'vue2-google-maps'

let apiKey = process.env.VUE_APP_API_KEY
console.log(apiKey) 
Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: apiKey,
    libraries: 'places',
  },
 })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
