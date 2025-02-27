import { API_URL } from "@/constants/api-url";
import axios from "axios";

const instance = axios.create({
  baseURL: API_URL, // Replace with your API server URL
});

export const authService = {
  register: async (user) => await instance.post(`/api/users`, user),
  login: async (user) => await instance.post("/api/auth", user),
  logout: async () => await instance.get("/api/auth/logout"),
};
