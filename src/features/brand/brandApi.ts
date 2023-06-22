import {
  IQueryParams,
  IResponseBrandSingle,
  IResponseBrands,
} from "@/types/types";
import apiSlice from "../api/apiSlice";

const brandApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBrands: builder.query<IResponseBrands, IQueryParams>({
      query: (params) => {
        console.log(params);
        const { category, search, page, limit, ...restParams } = params || {};
        const query: IQueryParams = {};

        if (category) {
          query.category = category;
        }

        if (search) {
          query.search = search;
        }

        if (page && limit) {
          query.page = page;
          query.limit = limit;
        }

        console.log(query);

        return {
          url: "/brands",
          params: {
            ...query,
            ...restParams,
          },
        };
      },
      providesTags: ["brand"],
    }),
    getSingleBrand: builder.query<IResponseBrandSingle, string>({
      query: (id) => ({
        url: `/brands/${id}`,
      }),
      providesTags: ["brand"],
    }),
    addBrand: builder.mutation({
      query: (data) => ({
        url: "/brands",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["brand"],
    }),
    deleteBrand: builder.mutation({
      query: (id) => ({
        url: `/brands/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["brand"],
    }),
    updateBrand: builder.mutation({
      query: (brand) => ({
        url: `/brands/${brand._id}`,
        method: "PUT",
        body: brand,
      }),
      invalidatesTags: ["brand"],
    }),
  }),
});

export const {
  useGetBrandsQuery,
  useGetSingleBrandQuery,
  useAddBrandMutation,
  useDeleteBrandMutation,
  useUpdateBrandMutation,
} = brandApi;
