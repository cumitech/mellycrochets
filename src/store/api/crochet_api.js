import { BASE_URL } from "../../constants/api-url";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const crochetAPI = createApi({
  reducerPath: "crochetAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["Crochet"],
  endpoints: (build) => ({
    getSingleCrochet: build.query({
      query: (crochetId) => `/crochets/${crochetId}`,
    }),
    getSingleCrochetBySlug: build.query({
      query: (slug) => `/crochets/slugs/${slug}`,
      transformResponse: (response) => ({
        ...response,
        createdAt: new Date(response.createdAt).toISOString(), // Ensure createdAt is a string
        updatedAt: new Date(response.updatedAt).toISOString(),
      }),
    }),
    fetchAllCrochets: build.query({
      query: (page = 1) => `/crochets?page=${page}`,
      providesTags: ["Crochet"],
    }),
    fetchFilteredCrochets: build.query({
      query: (filters) => {
        const queryParams = new URLSearchParams(filters).toString();
        return `/crochets/filter?${queryParams}`;
      },
      providesTags: ["Crochet"],
    }),
  }),
});
