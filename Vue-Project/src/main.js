import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueSession from 'vue-session'
import VModal from 'vue-js-modal'
import VueValidate from 'vee-validate'

//import bootstrap from 'bootstrap'
//import jquery from 'jquery'


Vue.config.productionTip = false

Vue.prototype.$API_LOCATION = "http://localhost:8000/api"

Vue.use(vueSession);
Vue.use(VModal);
Vue.use(VueValidate);
//Vue.use(bootstrap);
//Vue.use(jquery);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
