import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import VuePreventBack from 'vue-prevent-back'

//Vue.use(VuePreventBack, options)
Vue.use(VuePreventBack, {
  //message: "Now You are logged in, You can't go back right now. If you want to go to home page,Please logout",
  name: "my-prevent-back",
})
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,

  mode: 'history'
});

Vue.filter('snippet',function(value){
  return value.slice(0,100) + '...';
});

import '@/assets/css/tailwind.css'


Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
}).$mount('#app')
