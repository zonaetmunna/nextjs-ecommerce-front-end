import { ICategory } from "@/types/types";
import { FaTimes } from "react-icons/fa";
import Select from "react-select";

interface CategoryType {
  label: string;
  value: string;
}

interface PriceRange {
  min: number | null;
  max: number | null;
}

interface FilterSidebarProps {
  categories: ICategory[];
  selectedCategory: ICategory | null;
  setSelectedCategory: (category: ICategory | null) => void;
  searchText: string;
  setSearchText: (text: string) => void;
  selectedPrice: { min: number | null; max: number | null } | null;
  setSelectedPrice: (
    price: { min: number | null; max: number | null } | null
  ) => void;
  selectedRating: number | null;
  setSelectedRating: (rating: number | null) => void;
  selectedBrand: string | null;
  setSelectedBrand: (brand: string | null) => void;
  selectedColor: string | null;
  setSelectedColor: (color: string | null) => void;
  selectedSize: string | null;
  setSelectedSize: (size: string | null) => void;
}

const FilterSidebar = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  searchText,
  setSearchText,
  selectedPrice,
  setSelectedPrice,
  selectedRating,
  setSelectedRating,
  selectedBrand,
  setSelectedBrand,
  selectedColor,
  setSelectedColor,
  selectedSize,
  setSelectedSize,
}: FilterSidebarProps) => {
  const handleCategoryChange = (selectedOption: any) => {
    setSelectedCategory(selectedOption);
  };

  const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPrice((prevPrice) => ({
      ...prevPrice,
      min: e.target.value !== "" ? Number(e.target.value) : null,
    }));
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPrice((prevPrice) => ({
      ...prevPrice,
      max: e.target.value !== "" ? Number(e.target.value) : null,
    }));
  };

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRating(Number(e.target.value));
  };

  const handleBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedBrand(e.target.value);
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(e.target.value);
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSize(e.target.value);
  };

  const clearSelections = () => {
    setSelectedCategory(null);
    setSearchText("");
    setSelectedPrice({ min: null, max: null });
    setSelectedRating(null);
    setSelectedBrand(null);
    setSelectedColor(null);
    setSelectedSize(null);
  };

  const categoryOptions = categories?.map((category: ICategory) => ({
    value: category.name,
    label: category.name,
  }));

  return (
    <div className="p-4 white rounded-lg shadow-lg border-gray-200">
      <div className="category-filter mb-4">
        <h3 className="text-md font-medium mb-2">Category</h3>
        <Select
          className=" rounded-md p-2 w-full"
          value={selectedCategory}
          onChange={handleCategoryChange}
          options={categoryOptions}
        />
      </div>
      <div className="search-filter mb-4">
        <h3 className="text-md font-medium mb-2">Search</h3>
        <input
          type="text"
          className="border border-gray-300 rounded-md p-2 w-full"
          value={searchText}
          onChange={handleSearchTextChange}
        />
      </div>
      <div className="price-filter mb-4">
        <h3 className="text-md font-medium mb-2">Price</h3>
        <div className="flex space-x-4">
          <input
            type="number"
            placeholder="Min"
            min={0}
            max={100}
            value={selectedPrice?.min || ""}
            onChange={handleMinPriceChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          <input
            type="number"
            placeholder="Max"
            min={0}
            max={100}
            value={selectedPrice?.max || ""}
            onChange={handleMaxPriceChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
      </div>
      <div className="rating-filter mb-4">
        <h3 className="text-md font-medium mb-2">Rating</h3>
        <input
          type="range"
          min={0}
          max={5}
          step={0.5}
          value={selectedRating || ""}
          onChange={handleRatingChange}
          className="w-full"
        />
      </div>
      <div className="brand-filter mb-4">
        <h3 className="text-md font-medium mb-2">Brand</h3>
        <input
          type="text"
          className="border border-gray-300 rounded-md p-2 w-full"
          value={selectedBrand || ""}
          onChange={handleBrandChange}
        />
      </div>
      <div className="color-filter mb-4">
        <h3 className="text-lg font-medium mb-2">Color</h3>
        <input
          type="text"
          className="border border-gray-300 rounded-md p-2 w-full"
          value={selectedColor || ""}
          onChange={handleColorChange}
        />
      </div>
      <div className="size-filter">
        <h3 className="text-md font-medium mb-2">Size</h3>
        <input
          type="text"
          className="border border-gray-300 rounded-md p-2 w-full"
          value={selectedSize || ""}
          onChange={handleSizeChange}
        />
      </div>
      <div className="clear-button">
        <button
          className="flex items-center text-red-500"
          onClick={clearSelections}
        >
          <FaTimes className="mr-1" />
          Clear Selections
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
