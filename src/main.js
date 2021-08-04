import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toasted from 'vue-toasted';
import VueAwesomeSwiper from 'vue-awesome-swiper'


import FullpageModal from 'vue-fullpage-modal'

import VueSweetalert2 from 'vue-sweetalert2';
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
const options = {
  confirmButtonColor: '#8e4ecc',
  cancelButtonColor: '#8e4ecc',
};

Vue.use(VueSweetalert2,options);

Vue.use(FullpageModal)

Vue.use(Toasted)

//import style (<= Swiper 5.x)
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
