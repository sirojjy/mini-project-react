import axios from 'axios';

const baseURL = 'https://reqres.in/api';

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
});

export default axiosInstance;
