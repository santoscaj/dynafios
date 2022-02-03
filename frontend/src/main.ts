import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// @ts-ignore
import * as VueGoogleMaps from 'vue2-google-maps'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { Input, Button, Icon } from 'view-design';

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

library.add(faSearch)

Vue.component('Button', Button);
Vue.component('Icon', Icon);
Vue.component('Input', Input);

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
  ViewUI,
  store,
  render: h => h(App)
}).$mount('#app')
