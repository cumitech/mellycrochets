import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constants/api-url";

export const orderItemAPI = createApi({
  reducerPath: "orderItemAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["OrderItem"], // ✅ Corrected this line
  endpoints: (build) => ({
    getSingleOrderItem: build.query({
      query: (orderItemId) => `/order_items/${orderItemId}`,
      transformResponse: (response) => ({
        ...response,
        createdAt: new Date(response.createdAt).toISOString(),
      }),
    }),
    getSingleOrderItemBySlug: build.query({
      query: (slug) => `/order_items/slugs/${slug}`,
      transformResponse: (response) => ({
        ...response,
        createdAt: new Date(response.createdAt).toISOString(),
        updatedAt: new Date(response.updatedAt).toISOString(),
      }),
    }),
    fetchAllOrderItems: build.query({
      query: (page = 1) => `/order_items?page=${page}`,
      transformResponse: (response) =>
        response.map((orderItem) => ({
          ...orderItem,
          createdAt: new Date(orderItem.createdAt).toISOString(),
        })),
    }),
  }),
});