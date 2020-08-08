import Vue from 'vue'
import fetch from 'node-fetch'
import path from 'path'

import App from './App.vue'
import router from './router'
import store from './store'

import elStore from 'electron-store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = fetch.bind(null)
Vue.config.productionTip = false

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 持久化存储
Vue.elStore = Vue.prototype.$elStore = new elStore()

// 全局常量
Vue.appSetup = Vue.prototype.$appSetup = {
  userDataDir: path.join(process.cwd(), 'userData')
}

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')

export default Vue
