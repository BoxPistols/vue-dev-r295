import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


// const router = new VueRouter({
//   routes: [
//     // コロンで始まる動的セグメント
//     // { path: '/user/:id', component: User }
//   ]
// })