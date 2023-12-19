import Restaurant from "@/entities/Restaurant";
import createAxiosInstance from "@/requests/ConfigsDefault";
import { AxiosError } from "axios";
import { plainToInstance } from "class-transformer";
import FilterInterface from "@/interfaces/FilterInterface";

const AuthModule = {

    // Aplication's state (Core Informations)
    state: {

       //
       restaurants: [] as Array<Restaurant>,

       //
       choosenRestaurant: {} as Restaurant

    },
    
    // 
    getters: {
        restaurants: (state: any): Array<Restaurant> => {
            return state.restaurants
        },

        choosenRestaurant: (state: any): any => {
            return state.choosenRestaurant;
        }
    },
    
    // Method that can update the state
    mutations: {

        /**
         * 
        */
        saveRestaurants(state: any, restaurants: Array<any>): void {
            restaurants.map((restaurant: any) =>  {
                try{
                    const restaurantConverted = plainToInstance(Restaurant, restaurant);
                    console.log(restaurantConverted)
                    state.restaurants.push(restaurantConverted);
                }catch(error){
                    console.log(error)
                }
            });
        },

        /**
         * 
        */
        saveChoosenRestaurant(state: any, restaurant: any): void {
            const choosenRestaurantConverted = plainToInstance(Restaurant, restaurant);
            state.choosenRestaurant = choosenRestaurantConverted;
        },

        refreshRestaurants(state: any) {
            state.restaurants = [];
        }

    },

    // Asynchrony method (API calls)
    actions: {
        
        /**
         * Method for retrieve in the restaurant api.
         * @returns void
        */
        getRestaurants({commit}: any): void {
            commit('refreshRestaurants');
            try{
                createAxiosInstance(this)
                .get('/restaurants')
                .then((response) => {
                    console.log(response)
                    const restaurants = response.data
                    commit('saveRestaurants', restaurants)
                });
            }catch(error){
                console.log("Error", error)
            }
        },

        /**
         * Method for retrieve in the restaurant api.
         * @returns void
        */
        getChoosenRestaurant({commit}: any, id: number): void {
            try{
                createAxiosInstance(this)
                .get(`/restaurants/${id}`)
                .then(response => {
                    const restaurant = response.data.data;
                    commit('saveChoosenRestaurant', restaurant);
                })
                .catch((error: AxiosError) => {
                    alert(error.response?.status)
                });
            }catch(error){
                console.log("Error", error)
            }
        },

        /**
         * Method for retrieve in the restaurant api.
         * @returns void
        */
        getRestaurantsByFilter({commit}: any, filter: FilterInterface): void {
            commit('refreshRestaurants');

            // Creating params
            const params = new URLSearchParams();

            if(filter.typeFilter === 'item'){
                params.append('item', filter.searchValue);
            }

            if(filter.typeFilter === 'restaurant'){
                params.append('restaurant', filter.searchValue);
            }
            
            try{
                createAxiosInstance(this)
                .get(`/restaurants`, {
                    params
                })
                .then(response => {
                    const restaurant = response.data;
                    commit('saveRestaurants', restaurant);
                });
            }catch(error){
                console.log("Error", error)
            }
        }

    }
}

export default AuthModule;