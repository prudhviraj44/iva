import axios from 'axios';

// Create an axios instance with the backend URL from environment variables
const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000', // Default to local backend port
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor to include auth token if available
api.interceptors.request.use(
    (config) => {
        // If you implement token-based auth later, add it here
        // const token = localStorage.getItem('token');
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
