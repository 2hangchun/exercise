import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

Vue.component('anchored-heading', {
  render: function (createElement) {
    return createElement(
      'h' + this.level,   // 标签名称
      this.$slots.default // 子节点数组
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
