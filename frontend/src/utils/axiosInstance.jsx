import axios from "axios";

// Dynamically select base URL based on environment
const BASE_URL =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_BASE_URL
    : "https://airlinebookingandmanagementsystem.onrender.com/api"; // change "/api" to your deployed backend URL if needed

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
