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
       choosenRestaurant: {} as Restaurant,

       //
       isLoading: false,

       // 
       emptyResponse: false

    },
    
    // 
    getters: {
        restaurants: (state: any): Array<Restaurant> => {
            return state.restaurants
        },

        choosenRestaurant: (state: any): any => {
            return state.choosenRestaurant;
        },

        isLoading: (state: any): any => {
            return state.isLoading;
        },

        emptyResponse: (state: any): any => {
            return state.emptyResponse;
        }
    },
    
    // Method that can update the state
    mutations: {

        /**
         * 
        */
        saveRestaurants(state: any, restaurants: Array<any>): void {
            if(restaurants.length == 0) state.emptyResponse = true;
            else state.emptyResponse = false;
            restaurants.map((restaurant: any) =>  {
                try{
                    const restaurantConverted = plainToInstance(Restaurant, restaurant);
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

        /**
         * 
        */
        refreshRestaurants(state: any) {
            state.restaurants = [];
        },

        /**
         * 
        */
        isLoading(state: any, valor: boolean){
            state.isLoading = valor;
        },

    },

    // Asynchrony method (API calls)
    actions: {
        
        /**
         * Method for retrieve in the restaurant api.
         * @returns void
        */
        getRestaurants({commit}: any): void {
            commit('refreshRestaurants');
            commit('isLoading', true);
            try{
                createAxiosInstance(this)
                .get('/restaurants')
                .then((response) => {
                    console.log(response)
                    const restaurants = response.data
                    commit('saveRestaurants', restaurants);
                    commit('isLoading', false);
                });
            }catch(error){
                commit('isNotLoading');
                console.log("Error", error)
            }
            commit('isLoading', false);
        },

        /**
         * Method for retrieve in the restaurant api.
         * @returns void
        */
        getChoosenRestaurant({commit}: any, id: number): void {
            commit('isLoading', true);
            try{
                createAxiosInstance(this)
                .get(`/restaurants/${id}`)
                .then(response => {
                    const restaurant = response.data.data;
                    commit('saveChoosenRestaurant', restaurant);
                    commit('isLoading', false);
                })
                .catch((error: AxiosError) => {
                    console.log(error)
                    commit('isLoading', false);
                });
            }catch(error){
                commit('isNotLoading');
                console.log("Error", error)
                commit('isLoading', false);
            }
            commit('isLoading', false);
        },

        /**
         * Method for retrieve in the restaurant api.
         * @returns void
        */
        getRestaurantsByFilter({commit}: any, filter: FilterInterface): void {
            commit('refreshRestaurants');
            commit('isLoading');
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
                    commit('isNotLoading');
                });
            }catch(error){
                commit('isNotLoading');
                console.log("Error", error)
            }
            commit('isNotLoading');
        }

    }
}

export default AuthModule;