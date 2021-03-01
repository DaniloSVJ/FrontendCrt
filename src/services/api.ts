import axios from 'axios';

const api = axios.create({
    baseURL: 'http://177.136.75.21:3000',
});

export default api;
