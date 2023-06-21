import { ICategory } from "@/types/types";
import Image from "next/image";
import React from "react";
import { Fade } from "react-reveal";

interface CategoryCardProps {
  category: ICategory;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Fade bottom>
      <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg">
        <div className="flex items-center justify-center w-20 h-20 mx-auto">
          <Image
            src={category.imageUrl}
            alt={category.name}
            width={100}
            height={100}
          />
        </div>
        <div className="mt-4 text-center">
          <h2 className="text-2xl font-bold">{category.name}</h2>
        </div>
      </div>
    </Fade>
  );
};

export default CategoryCard;
