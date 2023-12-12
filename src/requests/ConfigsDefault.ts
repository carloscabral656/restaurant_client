import axios from 'axios';
import { RESTAURANT_API_BASE_URL } from '@/helpers/Configs';

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

  return axiosInstance;
};

export default createAxiosInstance;