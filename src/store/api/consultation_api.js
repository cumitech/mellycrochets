import { BASE_URL } from "../../constants/api-url";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const consultationAPI = createApi({
  reducerPath: "consultationAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["Consultation"],
  endpoints: (build) => ({
    getSingleConsultation: build.query({
      query: (consultationId) => `/consultations/${consultationId}`,
    }),
    fetchAllConsultations: build.query({
      query: (page = 1) => `/consultations?page=${page}`,
    }),
  }),
});
