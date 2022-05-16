import axios from 'axios';

const baseURL = "https://blog-perassi.herokuapp.com/";

export const axiosInstance = axios.create({
    baseURL
})