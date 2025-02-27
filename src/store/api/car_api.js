import { BASE_URL } from "../../constants/api-url";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const carAPI = createApi({
  reducerPath: "carAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["Car"],
  endpoints: (build) => ({
    getSingleCar: build.query({
      query: (carId) => `/cars/${carId}`,
    }),
    fetchAllCars: build.query({
      query: (page = 1) => `/cars?page=${page}`,
      providesTags: ["Car"],
    }),
    fetchFilteredCars: build.query({
      query: (filters) => {
        const queryParams = new URLSearchParams(filters).toString();
        debugger;
        console.log("queryParams: ", queryParams);
        return `/cars/filter?${queryParams}`;
      },
      providesTags: ["Car"],
    }),
  }),
});
