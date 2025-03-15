import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constants/api-url";

export const afterCareAPI = createApi({
  reducerPath: "afterCareAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["AfterCare"],
  endpoints: (build) => ({
    getSingleAfterCare: build.query({
      query: (afterCareId) => `/after_cares/${afterCareId}`,
      transformResponse: (response) => ({
        ...response,
        createdAt: new Date(response.createdAt).toISOString(), // Ensure createdAt is a string
      }),
    }),
    fetchAllAfterCares: build.query({
      query: (page = 1) => `/after_cares?page=${page}`,
      transformResponse: (response) => {
        // Ensure each afterCare's createdAt field is an ISO string
        const transformedAfterCares = response.map((afterCare) => ({
          ...afterCare,
          createdAt: new Date(afterCare.createdAt).toISOString(), // Convert date to ISO string
        }));
        return transformedAfterCares;
      },
    }),
  }),
});
