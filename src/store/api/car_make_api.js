import { BASE_URL } from "../../constants/api-url";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const carMakeAPI = createApi({
  reducerPath: "carMakeAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["CarMake"],
  endpoints: (build) => ({
    getSingleCarMake: build.query({
      query: (carMakeId) => `/car_makes/${carMakeId}`,
    }),
    fetchAllCarMakes: build.query({
      query: (page = 1) => `/car_makes?page=${page}`,
    }),
  }),
});
