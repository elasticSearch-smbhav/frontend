import axios from 'axios';

// Create a new axios instance for the main requests
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  timeout: 60000,
  headers: {
    Accept: "application/json", // Explicitly tell the server you expect JSON
  },
});


export default axiosInstance;
