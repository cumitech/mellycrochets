import { BASE_URL } from "../../constants/api-url";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const carEngineAPI = createApi({
  reducerPath: "carEngineAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["CarEngine"],
  endpoints: (build) => ({
    getSingleCarEngine: build.query({
      query: (carEngineId) => `/car_engines/${carEngineId}`,
    }),
    fetchAllCarEngines: build.query({
      query: (page = 1) => `/car_engines?page=${page}`,
    }),
  }),
});
