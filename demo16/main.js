import Vue from 'vue'
import App from './App.vue'
import ComponentB from './components/ComponentB'
Vue.component(ComponentB.name, ComponentB)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
