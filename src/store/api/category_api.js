import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constants/api-url";

export const categoryAPI = createApi({
  reducerPath: "categoryAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["Category"],
  endpoints: (build) => ({
    getSingleCategory: build.query({
      query: (categoryId) => `/categories/${categoryId}`,
      transformResponse: (response) => ({
        ...response,
        createdAt: new Date(response.createdAt).toISOString(), // Ensure createdAt is a string
      }),
    }),
    getSingleCategoryBySlug: build.query({
      query: (slug) => `/categories/slugs/${slug}`,
      transformResponse: (response) => ({
        ...response,
        createdAt: new Date(response.createdAt).toISOString(), // Ensure createdAt is a string
        updatedAt: new Date(response.updatedAt).toISOString(),
      }),
    }),
    fetchAllCategories: build.query({
      query: (page = 1) => `/categories?page=${page}`,
      transformResponse: (response) => {
        // Ensure each category's createdAt field is an ISO string
        const transformedCategories = response.map((category) => ({
          ...category,
          createdAt: new Date(category.createdAt).toISOString(), // Convert date to ISO string
        }));
        return transformedCategories;
      },
    }),
  }),
});
