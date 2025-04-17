import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constants/api-url";

export const orderAPI = createApi({
  reducerPath: "orderAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["Order"],
  endpoints: (build) => ({
    getSingleOrder: build.query({
      query: (orderId) => `/orders/${orderId}`,
      transformResponse: (response) => ({
        ...response,
        createdAt: new Date(response.createdAt).toISOString(), // Ensure createdAt is a string
      }),
    }),
    getSingleOrderBySlug: build.query({
      query: (slug) => `/orders/slug/${slug}`,
      transformResponse: (response) => ({
        ...response,
        createdAt: new Date(response.createdAt).toISOString(), // Ensure createdAt is a string
      }),
    }),
    fetchAllOrders: build.query({
      query: (page = 1) => `/orders?page=${page}`,
      transformResponse: (response) => {
        // Ensure each category's createdAt field is an ISO string
        const transformedCategories = response.map((category) => ({
          ...category,
          createdAt: new Date(category.createdAt).toISOString(), // Convert date to ISO string
        }));
        return transformedCategories;
      },
      providesTags: (result) => ["Order"],
    }),
    fetchAllOrdersByUser: build.query({
        query: ({ page = 1, userId }) => `/orders/users/${userId}?page=${page}`,
        transformResponse: (response) => {
          const transformedOrders = response.map((order) => ({
            ...order,
            createdAt: new Date(order.createdAt).toISOString(),
          }));
          return transformedOrders;
        },
      }),
    })
});