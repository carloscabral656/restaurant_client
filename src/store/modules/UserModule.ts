import User from "@/entities/User";
import createAxiosInstance from "@/requests/ConfigsDefault";
import { AxiosError, AxiosResponse } from "axios";

const UserModule = {

    // Aplication's state (Core Informations)
    state: {

        // User's registered and authenticated in the API.
        user: {} as User

    },
    
    // 
    getters: {
        user: (state: any) : User => {
            return state.user
        }
    },
    
    // Method that can update the state
    mutations: {
        saveUser(state: any, data: any) {
            const user = new User(data.name, data.email);
            state.user = user
        }
    },

    // Asynchrony method (API calls)
    actions: {
        getUser({commit}: any) {
            createAxiosInstance(this)
            .get('/user-authenticated')
            .then((response: AxiosResponse) => {
                commit('saveUser', response.data)
            }).catch((error: AxiosError) => {
                alert(error.response?.status)
            });
        }
    }
}

export default UserModule;