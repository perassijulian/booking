import axios from 'axios';

const baseURL = "https://booking-perassi.herokuapp.com/";

export const axiosInstance = axios.create({
    baseURL
})