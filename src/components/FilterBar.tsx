import { IProduct } from "@/types/types";
import { useState } from "react";
import { FaList, FaThLarge } from "react-icons/fa";
import Select from "react-select";

interface FilterBarProps {
  filterProducts: IProduct[];
  viewMode: "list" | "grid";
  onViewModeChange: (mode: "list" | "grid") => void;
}

const FilterBar = ({
  filterProducts,
  viewMode,
  onViewModeChange,
}: FilterBarProps) => {
  const [sort, setSort] = useState("latest-products");

  const handleSortChange = (selectedOption: any) => {
    setSort(selectedOption?.value);
  };

  const viewOptions = [
    { value: "grid", label: "Grid View" },
    { value: "list", label: "List View" },
  ];

  const sortOptions = [
    { value: "latest-products", label: "Latest Products" },
    { value: "short-filtering", label: "Short Filtering" },
  ];

  return (
    <div className=" shadow-lg border-gray-400">
      <div className="flex items-center justify-between mb-4 p-5">
        <div className="text-sm text-gray-600">
          Showing results 1-{filterProducts.length}
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2 mr-5">
            <p className="text-sm font-bold text-gray-600">View:</p>
            <button
              className={`mr-2 ${
                viewMode === "list" ? "text-gray-500" : "text-gray-900"
              }`}
              onClick={() => onViewModeChange("list")}
            >
              <FaList className=" " />
            </button>
            <button
              className={`${
                viewMode === "grid" ? "text-gray-500" : "text-gray-900"
              }`}
              onClick={() => onViewModeChange("grid")}
            >
              <FaThLarge className=" " />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-sm font-bold text-gray-600">Sort by:</p>
            <Select
              className="text-sm"
              options={sortOptions}
              value={sortOptions.find((option) => option.value === sort)}
              onChange={handleSortChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
