import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5004/api/v1",
  }),
  tagTypes: ["product", "auth", "store", "category", "order"],
  endpoints: (builder) => ({}),
});

export default apiSlice;
