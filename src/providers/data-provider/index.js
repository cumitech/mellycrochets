"use client";

import axios from "axios";
import dataProviderSimpleRest from "@refinedev/simple-rest";
import { API_URL as API_URL_BASE } from "../../constants/api-url";
// import { TOKEN_KEY, USER_DATA } from "../../constants/constant";

// API_URL
export const API_URL = `${API_URL_BASE}/api`;

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add headers before every request
// axiosInstance.interceptors.request.use((config) => {
//   if (typeof window !== "undefined") {
//     const token = JSON.parse(window.localStorage.getItem(TOKEN_KEY));
//     const user = JSON.parse(window.localStorage.getItem(USER_DATA));

//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }

//     if (user) {
//       config.headers["X-User-Id"] = user.id;
//     }
//   }
//   return config;
// });

export const dataProvider = dataProviderSimpleRest(API_URL, axiosInstance);
