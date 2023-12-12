import { createStore } from 'vuex'
import UserModule from '@/store/modules/UserModule'
import AuthModule from '@/store/modules/AuthModule'

const store = createStore({
  modules: {
    AuthModule, // Auth's logic module
    UserModule // User's logic module
  }
})

export default store;



