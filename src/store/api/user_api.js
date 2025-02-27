import { BASE_URL } from "../../constants/api-url";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["User"],
  endpoints: (build) => ({
    getSingleUser: build.query({
      query: (userId) => `/users/${userId}`,
    }),
    fetchAllUsers: build.query({
      query: (page = 1) => `/users?page=${page}`,
    }),
  }),
});
