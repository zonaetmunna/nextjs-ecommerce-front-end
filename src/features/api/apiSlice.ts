import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://nextjs-ecommerce-backend.vercel.app/api/v1",
  }),
  tagTypes: ["product", "auth", "store", "category", "brand", "order"],
  endpoints: (builder) => ({}),
});

export default apiSlice;
