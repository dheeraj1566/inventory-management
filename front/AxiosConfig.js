import axios from "axios";

const Instance = axios.create({
  baseURL: "https://inventory-management-8mn8.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default Instance;
