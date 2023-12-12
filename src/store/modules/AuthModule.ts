import { AUTHENTICATE_ROUTE } from "@/helpers/RequestsRestaurantApi";
import axios from "axios";

const AuthModule = {

    // Aplication's state (Core Informations)
    state: {

        // Token's api
        token: null,

        // Athentication
        authenticated: false

    },
    
    // 
    getters: {
        isAuthenticated: (state: any) => {
            return state.authenticated
        }
    },
    
    // Method that can update the state
    mutations: {
        saveToken(state: any, token: string) {
            state.token = token;
            state.authenticated = true
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
       
        authenticate({commit}: any, credentials: Credential) : void {
            try{
                axios
                .post(
                    AUTHENTICATE_ROUTE,
                    credentials
                )
                .then((response) => {
                    console.log( response)
                    commit('saveToken', response.data.data.token)
                });
            }catch(error){
                console.log("Error", error)
            }
        }

    }
}

export default AuthModule;