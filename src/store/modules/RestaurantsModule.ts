import Restaurant from "@/entities/Restaurant";
import createAxiosInstance from "@/requests/ConfigsDefault";
import { AxiosError } from "axios";
import { plainToInstance } from "class-transformer";
import FilterInterface from "@/interfaces/FilterInterface";

const RestaurantModule = {

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
        setLoading(state: any, valor: boolean){
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
            commit('setLoading', true);
            try{
                createAxiosInstance(this)
                .get('/restaurants')
                .then((response) => {
                    commit('setLoading', false);
                    const restaurants = response.data;
                    commit('saveRestaurants', restaurants);
                })
                .catch((response) => {
                    console.log(response)
                });
            }catch(error){
                commit('setLoading', false);
            }
            commit('setLoading', false);
        },

        /**
         * Method for retrieve in the restaurant api.
         * @returns void
        */
        getChoosenRestaurant({commit}: any, id: number): void {
            commit('setLoading', true);
            try{
                createAxiosInstance(this)
                .get(`/restaurants/${id}`)
                .then(response => {
                    commit('setLoading', false);
                    const restaurant = response.data.data;
                    commit('saveChoosenRestaurant', restaurant);
                })
                .catch((error: AxiosError) => {
                    console.log(error)
                    commit('setLoading', false);
                });
            }catch(error){
                console.log("Error", error)
                commit('setLoading', false);
            }
            commit('setLoading', false);
        },

        /**
         * Method for retrieve in the restaurant api.
         * @returns void
        */
        getRestaurantsByFilter({commit}: any, filter: FilterInterface): void {
            commit('refreshRestaurants');
            commit('setLoading', true);
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
                    commit('setLoading', false);
                })
                .catch((response) => {
                    console.log(response)
                });
            }catch(error){
                commit('setLoading', false);
                console.log("Error", error)
            }
            commit('setLoading', false);
        }

    }
}

export default RestaurantModule;