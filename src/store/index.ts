import axios from 'axios'
import { createStore } from 'vuex'
import {AUTHENTICATE_ROUTE} from '@/helpers/RequestsRestaurantApi'

export default createStore({
  
  // Aplication's state (Core Informations)
  state: {
    // User's registered and authenticated in the API.
    user: {}
  },
  
  getters: {
  },
  
  // Method that can update the state
  mutations: {

  },


  
  // Asynchrony method (API calls)
  actions: {

    authenticate({commit}, credentials){
      axios
      .post(
        AUTHENTICATE_ROUTE,
        credentials
      )
      .then((response) => {
        console.log(response)
      });
    }

  },
  modules: {

  }
})
