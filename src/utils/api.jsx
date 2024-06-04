import axios from 'axios';

const API = axios.create({
  baseURL: 'https://reqres.in/api',
});

export const registerUser = (data) => API.post('/register', data);
export const loginUser = (data) => API.post('/login', data);
export const getUsers = (page) => API.get(`/users?page=${page}`);
export const getUser = (id) => API.get(`/users/${id}`);
