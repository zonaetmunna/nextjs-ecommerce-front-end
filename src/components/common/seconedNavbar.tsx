"use client";
import { useGetCategoriesQuery } from "@/features/category/categoryApi";
import { ICategory } from "@/types/types";
import Link from "next/link";
import Select from "react-select";

export default function SeconedNavbar() {
  const { data: categoriesData } = useGetCategoriesQuery({});
  const categories = categoriesData?.data.categories;

  const categoryOptions = categories
    ? categories.map((category: ICategory) => ({
        value: category.name,
        label: category.name,
      }))
    : [];
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100 shadow-lg border-gray-200 border-t-0">
      {/* category select */}
      {/* category select */}
      <div className="flex items-center">
        <Select
          options={categoryOptions}
          placeholder="Category"
          className="w-40 p-2 rounded-md bg-gray-200  shadow-sm focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="flex items-center space-x-4">
        <Link href="/">
          <p className="px-2 py-1 rounded-md hover:bg-gray-200">Home</p>
        </Link>
        <Link href="/contact">
          <p className="px-2 py-1 rounded-md hover:bg-gray-200">Contact</p>
        </Link>
        <Link href="/blogs">
          <p className="px-2 py-1 rounded-md hover:bg-gray-200">Blogs</p>
        </Link>
        <Link href="/products">
          <p className="px-2 py-1 rounded-md hover:bg-gray-200">Products</p>
        </Link>
      </div>
    </nav>
  );
}
