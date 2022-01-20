import Vue from 'vue'
// import router from "./router";
import App from './App.vue'
import style from '@/assets/main.scss'

Vue.config.productionTip = false

new Vue({
  style,
  render: h => h(App),
}).$mount('#app')
