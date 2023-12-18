import Restaurant from "@/entities/Restaurant";
import createAxiosInstance from "@/requests/ConfigsDefault";
import { plainToInstance } from "class-transformer";

const AuthModule = {

    // Aplication's state (Core Informations)
    state: {

       //
       restaurants: [] as Array<Restaurant>,

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
        },

        /**
         * Method for retrieve in the restaurant api.
         * @returns void
        */
        getChoosenRestaurant({commit}: any, id: number): void {
            alert(id)
            try{
                createAxiosInstance(this)
                .get(`/restaurants/${id}`)
                .then(response => {
                    const restaurant = response.data.data;
                    commit('saveChoosenRestaurant', restaurant);
                });
            }catch(error){
                console.log("Error", error)
            }
        }

    }
}

export default AuthModule;