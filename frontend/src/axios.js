import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://user-auth-backend-755i.onrender.com',
});

export default instance;
