import 'babel-polyfill'
import Vue from 'vue'
import axios from 'axios'
import store from './store'
import router from './router'
import Filter from './filter'
import Directive from './directive'
import Components from './components'
import $ from '@/utils'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from '@/App'

import FastClick from 'fastclick'
import 'whatwg-fetch'

window.store = store
window.axios = axios


Vue.use(Mint)
window.Vue = Vue
window.router = router
window.Mint = Mint
Vue.config.productionTip = false
FastClick.attach(document.body)
Filter(Vue)
Directive(Vue)
Components(Vue)

router.afterEach(to => {
  document.title = to.meta.title
})

function localstorageTest() {
  var test = 'test'
  try {
    localStorage.setItem(test, test)
    localStorage.removeItem(test)
    return true
  } catch (e) {
    return false
  }
}


if (localstorageTest() === true) {

  new Vue({
    router,
    store,
    template: '<App/>',
    components: {
      App
    }
  }).$mount('#app')


} else {

}