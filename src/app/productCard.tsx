"use client";
import { addToCart } from "@/features/cart/cartSlice";
import { AppDispatch } from "@/features/store";
import { Product } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { BiShoppingBag } from "react-icons/bi";
import { useDispatch } from "react-redux";

export default function ProductCard({ product }: { product: Product }) {
  const dispatch = useDispatch<AppDispatch>();
  const handleAddProductCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <Image
        src={product.image}
        alt={product.name}
        className="h-64 w-full object-cover"
        width={500}
        height={300}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-700 font-bold">${product.price}</p>
        <Link href={`/products/${product._id}`}>
          <p className="text-blue-500 hover:text-blue-700 cursor-pointer">
            More details
          </p>
        </Link>
        <button
          type="button"
          className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={() => handleAddProductCart(product)}
        >
          <BiShoppingBag className="ml-1 mr-2 h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
