import { BASE_URL } from "../../constants/api-url";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mediaAPI = createApi({
  reducerPath: "mediaAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["Media"],
  endpoints: (build) => ({
    getSingleMedia: build.query({
      query: (mediaId) => `/media/${mediaId}`,
    }),
    fetchAllMedia: build.query({
      query: (page = 1) => `/media?page=${page}`,
    }),
  }),
});
