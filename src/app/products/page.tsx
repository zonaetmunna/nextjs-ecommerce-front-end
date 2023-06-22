"use client";
import FilterBar from "@/components/FilterBar";
import FilterSidebar from "@/components/FilterSidebar";
import { useGetCategoriesQuery } from "@/features/category/categoryApi";
import { useGetProductsQuery } from "@/features/product/productApi";
import { IProduct } from "@/types/types";
import { useEffect, useMemo, useState } from "react";
import ProductCard from "../productCard";

interface CategoryType {
  label: string;
  value: string;
}

interface PriceRange {
  min: number | null;
  max: number | null;
}
const Products = () => {
  // states
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(
    null
  );
  const [searchText, setSearchText] = useState("");
  const [selectedPrice, setSelectedPrice] = useState<{
    min: number | null;
    max: number | null;
  } | null>(null);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"list" | "grid">("grid");
  // api data
  const { data, error, isError } = useGetProductsQuery({
    category: selectedCategory?.value,
    search: searchText,
    price: selectedPrice || undefined,
    rating: selectedRating || undefined,
    brand: selectedBrand || undefined,
    color: selectedColor || undefined,
    size: selectedSize || undefined,
  });
  const products = data?.data.products;
  const { data: datas } = useGetCategoriesQuery({});
  const categories = datas?.data.categories;
  const totalPage = data?.data.totalPage;
  const count = data?.data.count;
  // handle

  const filterProducts = useMemo(() => {
    if (
      products &&
      selectedCategory &&
      selectedPrice &&
      selectedRating &&
      selectedBrand &&
      selectedColor &&
      selectedSize
    ) {
      return products.filter(
        (product: IProduct) =>
          product.category === selectedCategory.value &&
          product.price >= selectedPrice.min &&
          product.price <= selectedPrice.max &&
          product.rating >= selectedRating &&
          product.brand === selectedBrand &&
          product.color.includes(selectedColor) &&
          product.size.includes(selectedSize)
      );
    } else {
      return products || [];
    }
  }, [
    products,
    selectedCategory,
    selectedPrice,
    selectedRating,
    selectedBrand,
    selectedColor,
    selectedSize,
  ]);

  useEffect(() => {
    if (isError) {
      <p>error</p>;
    }
  }, [isError]);

  const handleViewModeChange = (mode: "list" | "grid") => {
    setViewMode(mode);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/4 lg:w-1/5 p-4">
        {/* filter sidebar */}
        <FilterSidebar
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchText={searchText}
          setSearchText={setSearchText}
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
      </div>
      <div className="w-full md:w-3/4 lg:w-4/5 p-4">
        {/* filter bar */}
        <FilterBar
          filterProducts={filterProducts}
          viewMode={viewMode}
          onViewModeChange={handleViewModeChange}
        />
        {/* products */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filterProducts?.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col">
            {filterProducts?.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
        <div>{/* load products */}</div>
      </div>
    </div>
  );
};

export default Products;
