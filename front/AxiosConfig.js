import axios from "axios";

const Instance = axios.create({
  baseURL: "https://inventory-management-8mn8.onrender.com",
  // baseURL : `http://localhost:8080`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials:true,
});

Instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default Instance;
