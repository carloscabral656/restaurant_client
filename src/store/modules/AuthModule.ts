import createAxiosInstance from "@/requests/ConfigsDefault";

const AuthModule = {

    // Aplication's state (Core Informations)
    state: {

        // Token's api
        token: null,

        // Athentication
        authenticated: false,

        // Server's response
        responseMessage: null

    },
    
    // 
    getters: {
        isAuthenticated: (state: any) => {
            return state.authenticated
        },

        getToken: (state: any) : string => {
            return state.token
        },

        getResponseError: (state: any): string => {
            return state.responseMessage
        },

        hasMessage: (state: any): boolean => {
            return state.responseMessage === null;
        },

        getMessage: (state: any): string => {
            return state.responseMessage;
        },
    },
    
    // Method able to update the state
    mutations: {
        saveToken(state: any, token: string) {
            state.token = token;
            state.authenticated = true
            localStorage.setItem('token', token)
        },

        storeTokenFromCache(state: any, token: string) {
            if(!token) {
                state.authenticated = false
                return;
            }
            state.token = token
            state.authenticated = true
        },

        storeResponseError(state: any, response: string) {
            state.responseMessage = response;
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
        authenticate({commit}: any, credentials: Credential) : void {
            try{
                createAxiosInstance(this)
                .post(
                    '/auth/login',
                    credentials
                )
                .then((response) => {
                    commit('saveToken', response.data.data.token)
                })
                .catch((response) => {
                    commit('storeResponseError', response.response.data.data)
                });
            }catch(error){
                console.log("Error", error)
            }
        },
        
        /**
         * 
         * 
        */
        retrieveTokenFromCache({commit}: any) {
            const token = localStorage.getItem('token');
            commit('storeTokenFromCache', token);
        }

    }
}

export default AuthModule;