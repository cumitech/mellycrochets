import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constants/api-url";

export const commentAPI = createApi({
  reducerPath: "commentAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  commentTypes: ["Comment"],
  endpoints: (build) => ({
    getSingleComment: build.query({
      query: (commentId) => `/comments/${commentId}`,
      transformResponse: (response) => ({
        ...response,
        createdAt: new Date(response.createdAt).toISOString(), // Ensure createdAt is a string
      }),
    }),
    fetchAllComments: build.query({
      query: (page = 1) => `/comments?page=${page}`,
      transformResponse: (response) => {
        // Ensure each comment's createdAt field is an ISO string
        const transformedComments = response.map((comment) => ({
          ...comment,
          createdAt: new Date(comment.createdAt).toISOString(), // Convert date to ISO string
        }));
        return transformedComments;
      },
    }),
  }),
});
