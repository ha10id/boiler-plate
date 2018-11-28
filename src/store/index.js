import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/modules/user'
import auth from '@/store/modules/auth'
import document from '@/store/modules/document'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    user,
    auth,
    document
  },
  strict: debug,
})
