import Vue from 'vue'
import App from './App.vue'
import XinweiUI from '../packages'
Vue.config.productionTip = false
Vue.use(XinweiUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
