import createAxiosInstance from "@/requests/ConfigsDefault";

const AuthModule = {

    // Aplication's state (Core Informations)
    state: {

       //
       restaurants: []

    },
    
    // 
    getters: {
       
    },
    
    // Method that can update the state
    mutations: {
        saveRestaurants(state: any): void{
            state.restaurants = state
        }
    },

    // Asynchrony method (API calls)
    actions: {
        
        /**
         * Method for retrieve in the restaurant api.
         * @returns void
        */
       
        getRestaurants({commit}: any): void {
            try{
                createAxiosInstance(this)
                .get(
                    '/v1/restaurants'
                )
                .then((response) => {
                    commit('saveRestaurants', response.data.data.token)
                });
            }catch(error){
                console.log("Error", error)
            }
        }

    }
}

export default AuthModule;