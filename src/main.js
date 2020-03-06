import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import * as filters from './utils/filters'
import fastclick from 'fastclick'

sync(store, router)

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

fastclick.attach(document.body)

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})