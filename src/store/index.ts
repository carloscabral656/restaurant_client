import { createStore } from 'vuex'
import UserModule from '@/store/modules/UserModule'

const store = createStore({
  modules: {
    UserModule // User's logic module
  }
})

export default store;



