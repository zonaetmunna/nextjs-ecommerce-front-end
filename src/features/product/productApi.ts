import {
  IQueryParams,
  IResponseProduct,
  IResponseProductSingle,
} from "@/types/types";
import apiSlice from "../api/apiSlice";

const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<IResponseProduct, IQueryParams>({
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
          url: "/products",
          params: {
            ...query,
            ...restParams,
          },
        };
      },
      providesTags: ["product"],
    }),
    getSingleProduct: builder.query<IResponseProductSingle, string>({
      query: (id) => ({
        url: `/products/${id}`,
      }),
      providesTags: ["product"],
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),
    updateProduct: builder.mutation({
      query: (product) => ({
        url: `/products/${product._id}`,
        method: "PATCH",
        body: product,
      }),
      invalidatesTags: ["product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productApi;
