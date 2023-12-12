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
            return true;
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
            alert(AUTHENTICATE_ROUTE)

            try{
                axios
                .post(
                    AUTHENTICATE_ROUTE,
                    credentials
                )
                .then((response) => {
                    commit('saveToken')
                });
            }catch(error){
                console.log("Errpr", error)
            }
            
        }

    }
}

export default AuthModule;