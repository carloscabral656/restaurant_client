import User from "@/entities/User";
import createAxiosInstance from "@/requests/ConfigsDefault";

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
            .then(response => {
                commit('saveUser', response.data.data)
            })
        }
    }
}

export default UserModule;