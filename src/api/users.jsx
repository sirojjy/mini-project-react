import axios from './axiosInstance';

export const getUsers = async (page) => {
  const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
  return response.data;
};

export const getUser = async (id) => {
  const response = await axios.get(`https://reqres.in/api/users/${id}`);
  return response.data;
};

export const registerUser = async (data) => {
  const response = await axios.post('https://reqres.in/api/register', data);
  return response.data;
};

export const loginUser = async (data) => {
  const response = await axios.post('https://reqres.in/api/login', data);
  return response.data;
};
