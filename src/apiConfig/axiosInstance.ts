import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "",
  timeout: import.meta.env.VITE_REACT_AXIOS_TIMEOOUT || 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
