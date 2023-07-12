"use client";
import { ICategory } from "@/types/types";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
const Fade = require("react-reveal/Fade");

interface CategoryCardProps {
  category: ICategory;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <motion.div
      className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg"
      whileHover={{ scale: 1.05 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-20 h-20 mx-auto">
        <div className="w-full h-full aspect-w-1 aspect-h-1">
          <Image
            src={category.imageUrl}
            alt={category.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
            <h2 className="text-2xl font-bold text-white">{category.name}</h2>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CategoryCard;
