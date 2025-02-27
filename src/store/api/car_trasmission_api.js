import { BASE_URL } from "../../constants/api-url";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const carTransmissionAPI = createApi({
  reducerPath: "carTransmissionAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["CarTransmission"],
  endpoints: (build) => ({
    getSingleCarTransmission: build.query({
      query: (carTransmissionId) => `/car_transmissions/${carTransmissionId}`,
    }),
    fetchAllCarTransmissions: build.query({
      query: (page = 1) => `/car_transmissions?page=${page}`,
    }),
  }),
});
