import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { RESTAURANT_API_BASE_URL } from '@/helpers/Configs';
import router from '@/router';

/**
 * Function to create a Axios Instance,
 * It requires an store instance to get the api's token
*/
const createAxiosInstance = (store: any) => {
  const axiosInstance = axios.create({
    baseURL: RESTAURANT_API_BASE_URL,
    headers: {
      common: {
        'Accept': 'application/json',
        'Authorization': store.getters.getToken ? `Bearer ${store.getters.getToken}` : ''
      }
    }
  });

  // Interceptors
  axiosInstance.interceptors.response.use(
    function (response: AxiosResponse) {
      return response;
    }, 
    
    function (error: AxiosError) {
      if(error.response?.status === 401){
        router.push("/login");
      }
      return Promise.reject(error);
  });

  return axiosInstance;
};

export default createAxiosInstance;