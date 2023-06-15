"use client";
import { addToCart } from "@/features/cart/cartSlice";
import { AppDispatch } from "@/features/store";
import { addToWishlist } from "@/features/wishlist/wishlistSlice";
import { IProduct } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import toast from 'react-hot-toast';
import { FiEye, FiHeart, FiShoppingCart } from 'react-icons/fi';
import { useDispatch } from "react-redux";
export default function ProductCard({ product }: { product: IProduct }) {
  const {name,image,price,stock,category,_id}=product;
  const dispatch = useDispatch<AppDispatch>();
 
  const handleAddToCart =async (product: IProduct) => {
    try {
      dispatch(addToCart(product));
      toast.success("Product added to cart");
    } catch (error) {
      toast.error("Failed to add product to cart");
    }
  };

  const handleAddToWishlist =async () => {
    try {
      dispatch(addToWishlist(product));
      toast.success("Product added to wishlist");
    } catch (error) {
      toast.error("Failed to add product to wishlist");
    }
  };

  

  return (
    <div className="product-card bg-white shadow-lg rounded-lg p-6">
    <div className="product-image">
      <Image src={image} alt={name} width={300} height={300} className="w-full h-32 object-cover mb-4" />
    </div>
    <div className="product-details">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-700">${price}</p>
      <p className="text-gray-700">Stock: {stock}</p>
      <p className="text-gray-700">Category: {category}</p>
      <p className="text-gray-700">ID: {_id}</p>
      <div className="buttons mt-4 space-x-2">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={()=>handleAddToCart(product)}
        >
          <FiShoppingCart className="inline-block mr-2" />
         
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
          onClick={handleAddToWishlist}
        >
          <FiHeart className="inline-block mr-2" />
         
        </button>
        <Link href={`/product/${_id}`}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
          
        >
          <FiEye className="inline-block mr-2" />
        
        </Link>
      </div>
    </div>
  </div>
  );
}
