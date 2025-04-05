import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constants/api-url";

export const tagAPI = createApi({
  reducerPath: "tagAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["Tag"],
  endpoints: (build) => ({
    getSingleTag: build.query({
      query: (tagId) => `/tags/${tagId}`,
      transformResponse: (response) => ({
        ...response,
        createdAt: new Date(response.createdAt).toISOString(), // Ensure createdAt is a string
      }),
    }),
    fetchAllTags: build.query({
      query: (page = 1) => `/tags?page=${page}`,
      transformResponse: (response) => {
        // Ensure each tag's createdAt field is an ISO string
        const transformedTags = response.map((tag) => ({
          ...tag,
          createdAt: new Date(tag.createdAt).toISOString(), // Convert date to ISO string
        }));
        return transformedTags;
      },
    }),
  }),
});
