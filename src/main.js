import Vue from 'vue'
import '@/plugins/axios'
import ElementUI from 'element-ui'
import infiniteScroll from 'vue-infinite-scroll'
import Loading from '@/components/lib/loading'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/ru-RU'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

Vue.config.productionTip = false
Vue.component('loading', Loading)
Vue.use(ElementUI, { locale })
Vue.use(infiniteScroll)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
