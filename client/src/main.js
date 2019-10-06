import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import feather from 'vue-icon'

import "@/assets/global.css"

Vue.use(feather, 'v-icon')

Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})