import Address from "@/entities/Address";
import Gastronomy from "@/entities/Gastronomy";
import Owner from "@/entities/Owner";
import Restaurant from "@/entities/Restaurant";
import createAxiosInstance from "@/requests/ConfigsDefault";
import { plainToClass, plainToInstance } from "class-transformer";

const AuthModule = {

    // Aplication's state (Core Informations)
    state: {

       //
       restaurants: [] as Array<Restaurant>

    },
    
    // 
    getters: {
        restaurants: (state: any): Array<Restaurant> => {
            return state.restaurants
        }
    },
    
    // Method that can update the state
    mutations: {
        saveRestaurants(state: any, restaurants: Array<any>): void {
            restaurants.map((restaurant: any) =>  {
                try{
                    const restaurantConverted = plainToInstance(Restaurant, restaurant);
                    state.restaurants.push(restaurantConverted);
                }catch(error){
                    console.log(error)
                }
            });
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
                .get('/restaurants')
                .then((response) => {
                    const restaurants = response.data
                    commit('saveRestaurants', restaurants)
                });
            }catch(error){
                console.log("Error", error)
            }
        }

    }
}

export default AuthModule;