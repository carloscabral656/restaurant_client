import axios from "axios";
import { RESTAURANT_API_BASE_URL } from "@/helpers/Configs";

const axiosInstance = axios.create({
    baseURL: RESTAURANT_API_BASE_URL
});


export default {
    axiosInstance
}