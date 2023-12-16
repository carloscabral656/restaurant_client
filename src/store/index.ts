import { createStore } from 'vuex'
import UserModule from '@/store/modules/UserModule'
import AuthModule from '@/store/modules/AuthModule'
import RetaurantsModule from '@/store/modules/RestaurantsModule'

const store = createStore({
  modules: {
    AuthModule, // Auth's logic module
    UserModule, // User's logic module
    RetaurantsModule
  }
})

export default store;



