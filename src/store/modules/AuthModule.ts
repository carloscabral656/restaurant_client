import { AUTHENTICATE_ROUTE } from "@/helpers/RequestsRestaurantApi";
import axios from "axios";

const AuthModule = {

    // Aplication's state (Core Informations)
    state: {

        // Token's api
        token: null,

    },
    
    // 
    getters: {

    },
    
    // Method that can update the state
    mutations: {
        saveToken(state : any, token: String){
            state.token = token;
        }
    },

    // Asynchrony method (API calls)
    actions: {
        
        /**
         * Method for authenticate in the restaurant api.
         * @param
         * @param
         * @returns void
        */
        authenticate({commit} : any, credentials: Credential) : void {
            axios
            .post(
                AUTHENTICATE_ROUTE,
                credentials
            )
            .then((response) => {
                commit('saveToken')
            });
        }

    }
}

export default AuthModule;