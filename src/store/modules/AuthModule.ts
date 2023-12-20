import ResponseInterface from "@/interfaces/ResponseInterface";
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
        response: {} as ResponseInterface

    },
    
    // 
    getters: {
        isAuthenticated: (state: any) => {
            return state.authenticated
        },

        getToken: (state: any) : string => {
            return state.token
        },

        hasResponse: (state: any): boolean => {
            return state.response;
        },

        getResponse: (state: any): string => {
            return state.response;
        },
    },
    
    // Method able to update the state
    mutations: {

        //
        saveToken(state: any, token: string) {
            localStorage.setItem('token', token)
            state.token = token;
        },

        //
        storeResponseError(state: any, response: string) {
            state.responseMessage = response;
        },

        //
        resetToken(state: any){
            localStorage.removeItem('token')
            state.token = null;
        },

        //
        resetResponse(state: any){
            state.response = {};
        },

        //
        userAutenticated(state: any){
            state.authenticated = true;
        },

        //
        storeResponse(state: any, response: any){
            state.response = response;
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
                .post('/auth/login', credentials)
                .then((response: AxiosResponse) => {
                    commit('saveToken', response.data.data.token)
                    commit('userAutenticated')
                })
                .catch((error: AxiosError) => {
                    if(error.response && [401, 422].includes(error.response.status)){
                        commit('storeResponse', error.response.data)
                    }
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
                console.log(error)
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