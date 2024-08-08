import axios from "axios";
// import env from "react-dotenv";

// Create an instance of axios
const axiosInstance = axios.create({
  baseURL: "https://api.example.com", // Replace with your API base URL
  timeout: 10000,
  // timeout: env.REACT_APP_AXIOS_TIMEOOUT || 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
