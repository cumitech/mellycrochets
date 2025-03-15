import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constants/api-url";

export const crochetTypeAPI = createApi({
  reducerPath: "crochetTypeAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["CrochetType"],
  endpoints: (build) => ({
    getSingleCrochetType: build.query({
      query: (crochetTypeId) => `/crochet_types/${crochetTypeId}`,
      transformResponse: (response) => ({
        ...response,
        createdAt: new Date(response.createdAt).toISOString(), // Ensure createdAt is a string
      }),
    }),
    fetchAllCrochetTypes: build.query({
      query: (page = 1) => `/crochet_types?page=${page}`,
      transformResponse: (response) => {
        // Ensure each crochetType's createdAt field is an ISO string
        const transformedCrochetTypes = response.map((crochetType) => ({
          ...crochetType,
          createdAt: new Date(crochetType.createdAt).toISOString(), // Convert date to ISO string
        }));
        return transformedCrochetTypes;
      },
    }),
  }),
});
