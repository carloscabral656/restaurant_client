import { AUTHENTICATE_ROUTE } from "@/helpers/RequestsRestaurantApi";
import axios from "axios";

const UserModule = {

    // Aplication's state (Core Informations)
    state: {

        // User's registered and authenticated in the API.
        user: {}

    },
    
    // 
    getters: {

    },
    
    // Method that can update the state
    mutations: {

    },

    // Asynchrony method (API calls)
    actions: {
        
        /**
         * Method for authenticate in the restaurant api.
         * @param
         * @param
         * @returns void
        */
        authenticate({commit} : any, credentials: any) : void {
            axios
            .post(
                AUTHENTICATE_ROUTE,
                credentials
            )
            .then((response) => {
                console.log(response)
            });
        }

    }
}

export default UserModule;