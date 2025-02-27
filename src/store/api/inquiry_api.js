import { BASE_URL } from "../../constants/api-url";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const inquiryAPI = createApi({
  reducerPath: "inquiryAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["Inquiry"],
  endpoints: (build) => ({
    getSingleInquiry: build.query({
      query: (inquiryId) => `/inquiries/${inquiryId}`,
    }),
    fetchAllInquiries: build.query({
      query: (page = 1) => `/inquiries?page=${page}`,
    }),
  }),
});
