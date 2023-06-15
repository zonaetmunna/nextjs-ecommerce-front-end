import {
  IQueryParams,
  IResponseCategories,
  IResponseCategorySingle,
} from "@/types/types";
import apiSlice from "../api/apiSlice";

const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<IResponseCategories, IQueryParams>({
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
          url: "/categories",
          params: {
            ...query,
            ...restParams,
          },
        };
      },
      providesTags: ["category"],
    }),
    getSingleCategory: builder.query<IResponseCategorySingle, string>({
      query: (id) => ({
        url: `/categories/${id}`,
      }),
      providesTags: ["category"],
    }),
    addCategory: builder.mutation({
      query: (data) => ({
        url: "/categories",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["category"],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["category"],
    }),
    updateCategory: builder.mutation({
      query: (category) => ({
        url: `/categories/${category._id}`,
        method: "PUT",
        body: category,
      }),
      invalidatesTags: ["category"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetSingleCategoryQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;
