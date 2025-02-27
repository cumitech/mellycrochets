import { BASE_URL } from "../../constants/api-url";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fuelTypeAPI = createApi({
  reducerPath: "fuelTypeAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["FuelType"],
  endpoints: (build) => ({
    getSingleFuelType: build.query({
      query: (fuelTypeId) => `/fuel_types/${fuelTypeId}`,
    }),
    fetchAllFuelTypes: build.query({
      query: (page = 1) => `/fuel_types?page=${page}`,
    }),
  }),
});
