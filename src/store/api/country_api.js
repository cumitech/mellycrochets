import { BASE_URL } from "../../constants/api-url";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countryAPI = createApi({
  reducerPath: "countryAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["Country"],
  endpoints: (build) => ({
    getSingleCountry: build.query({
      query: (countryId) => `/countries/${countryId}`,
    }),
    fetchAllCountries: build.query({
      query: (page = 1) => `/countries?page=${page}`,
    }),
  }),
});
