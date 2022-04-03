import Vue from 'vue'
import App from './App.vue'

import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'

Vue.component('ComponentA', () => ({
  component: import('./components/ComponentA'),
  loading: ComponentB,
  error: ComponentC,
  delay: 200,
  timeout: 3000
}))
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
