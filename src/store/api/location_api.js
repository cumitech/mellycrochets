import { BASE_URL } from "../../constants/api-url";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const locationAPI = createApi({
  reducerPath: "locationAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["Location"],
  endpoints: (build) => ({
    getSingleLocation: build.query({
      query: (locationId) => `/locations/${locationId}`,
    }),
    fetchAllLocations: build.query({
      query: (page = 1) => `/locations?page=${page}`,
    }),
  }),
});
