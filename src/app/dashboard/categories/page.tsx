"use client";
import AddCategory from "@/components/dashboard/category/AddCategory";
import DeleteCategory from "@/components/dashboard/category/DeleteCategory";
import UpdateCategory from "@/components/dashboard/category/UpdateCategory";
import {
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
  useUpdateCategoryMutation,
} from "@/features/category/categoryApi";
import { ICategory } from "@/types/types";
import { useState } from "react";
import { BsEye } from "react-icons/bs";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaChevronLeft,
  FaChevronRight,
  FaEdit,
  FaTimesCircle,
  FaTrash,
} from "react-icons/fa";
export default function Categories() {
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // api data
  const { data, error, isError, isLoading } = useGetCategoriesQuery({
    search: searchText,
    page: currentPage,
    limit: itemsPerPage,
  });

  const categories = data?.data.categories;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleCategories = categories?.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil((categories?.length || 0) / itemsPerPage);

  /* handle update and delete */
  const [addCategory] = useAddCategoryMutation();
  const [updateCategory] = useUpdateCategoryMutation();
  const [deleteCategory] = useDeleteCategoryMutation();

  const [selectedCategories, setSelectedCategories] =
    useState<ICategory | null>(null);
  const [isSingleCategoriesModalOpen, setIsSingleCategoriesModalOpen] =
    useState<boolean>(false);
  const [isUpdateCategoriesModalOpen, setIsUpdateCategoriesModalOpen] =
    useState<boolean>(false);
  const [isDeleteCategoriesModalOpen, setIsDeleteCategoriesModalOpen] =
    useState<boolean>(false);
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] =
    useState<boolean>(false);

  const handleUpdateCategory = (category: ICategory) => {
    updateCategory(category);
  };

  const handleDeleteCategory = (id: string) => {
    deleteCategory(id);
  };

  const handleAddCategory = (product: ICategory) => {
    addCategory(product);
  };

  const handleCategoryClick = (category: ICategory) => {
    setSelectedCategories(category);
    setIsSingleCategoriesModalOpen(true);
  };

  const handleUpdateClick = (product: ICategory) => {
    setSelectedCategories(product);
    setIsUpdateCategoriesModalOpen(true);
  };

  const handleDeleteClick = (product: ICategory) => {
    setSelectedCategories(product);
    setIsDeleteCategoriesModalOpen(true);
  };
  const handleAddCategoryClick = () => {
    setIsAddCategoryModalOpen(true);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Category List</h1>
      <div className="flex items-center space-x-2 mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="border border-gray-300 rounded-md py-2 px-3 w-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {searchText && (
            <button
              onClick={() => setSearchText("")}
              className="absolute right-0 top-0 h-full flex items-center pr-2 text-gray-500 hover:text-gray-700"
            >
              <FaTimesCircle className="w-4 h-4" />
            </button>
          )}
        </div>
        {/*  */}
        {/* add product */}
        <div className="w-full md:w-3/4 lg:w-1/2 xl:w-1/3 flex items-center ">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setIsAddCategoryModalOpen(true)}
          >
            Add Category
          </button>
        </div>
      </div>
      <table className="min-w-full divide-y divide-gray-200 mt-10 p-5">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>

            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              <span className="sr-only">Action</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {visibleCategories?.map((category: ICategory) => (
            <tr key={category._id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  {category.name}
                </div>
              </td>

              <td className="border px-4 py-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={() => handleCategoryClick(category)}
                >
                  <BsEye />
                </button>
                <button
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={() => handleUpdateClick(category)}
                >
                  <FaEdit />
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDeleteClick(category)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* paginition */}
      <nav className="flex justify-center" aria-label="Pagination">
        <ul className="inline-flex">
          <li>
            <button
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
              className={`${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              } py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`}
            >
              <span className="sr-only">First page</span>
              <FaAngleDoubleLeft className="h-5 w-5" aria-hidden="true" />
            </button>
          </li>
          <li>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              } ml-3 py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`}
            >
              <span className="sr-only">Previous page</span>
              <FaChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
          </li>
          <li>
            <span className="mx-3 py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-700">{`${currentPage} of ${totalPages}`}</span>
          </li>
          <li>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              } mr-3 py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`}
            >
              <span className="sr-only">Next page</span>
              <FaChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </li>
          <li>
            <button
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
              className={`${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              } py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`}
            >
              <span className="sr-only">Last page</span>
              <FaAngleDoubleRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </li>
        </ul>
      </nav>
      {/* modal */}

      {/* {isSingleBrandModalOpen && (
        <ViewProduct
          onClose={() => setIsSingleBrandModalOpen(false)}
          brand={selectedBrand}
        />
      )} */}

      {isAddCategoryModalOpen && (
        <AddCategory
          onClose={() => setIsAddCategoryModalOpen(false)}
          onAddCategory={handleAddCategory}
        />
      )}

      {selectedCategories && isUpdateCategoriesModalOpen && (
        <UpdateCategory
          onClose={() => setIsUpdateCategoriesModalOpen(false)}
          onUpdateCategory={handleUpdateCategory}
          category={selectedCategories}
        />
      )}
      {selectedCategories && isDeleteCategoriesModalOpen && (
        <DeleteCategory
          onClose={() => setIsDeleteCategoriesModalOpen(false)}
          onDeleteCategory={handleDeleteCategory}
          category={selectedCategories}
        />
      )}
    </div>
  );
}
