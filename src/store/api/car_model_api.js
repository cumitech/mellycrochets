import { BASE_URL } from "../../constants/api-url";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const carModelAPI = createApi({
  reducerPath: "carModelAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["CarModel"],
  endpoints: (build) => ({
    getSingleCarModel: build.query({
      query: (carModelId) => `/car_models/${carModelId}`,
    }),
    fetchAllCarModels: build.query({
      query: (page = 1) => `/car_models?page=${page}`,
    }),
  }),
});
