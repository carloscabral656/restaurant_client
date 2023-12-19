import createAxiosInstance from "@/requests/ConfigsDefault";
import { AxiosError, AxiosResponse } from "axios";

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

        //
        saveToken(state: any, token: string) {
            localStorage.setItem('token', token)
            state.token = token;
        },

        storeResponseError(state: any, response: string) {
            state.responseMessage = response;
        },

        resetToken(state: any){
            localStorage.removeItem('token')
            state.token = null;
        },

        userAutenticated(state: any){
            state.authenticated = true;
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
                .then((response: AxiosResponse) => {
                    commit('saveToken', response.data.data.token)
                    commit('userAutenticated')
                })
                .catch((error: AxiosError) => {
                    alert(error.code)
                });
            }catch(error){
                console.log("Error", error)
            }
        },

        /**
         * 
         * 
        */
        hasValidToken({commit}: any, token: string) {
            try{
                createAxiosInstance(this)
                .get('/token-valid')
                .then((response) => {
                    commit('saveToken', token)
                    commit('userAutenticated')
                });
            }catch(error){
                alert(error)
            }
        },


        /**
         * 
         * 
        */
       resetToken({commit}: any){
            commit('resetToken');
       }

    }
}

export default AuthModule;