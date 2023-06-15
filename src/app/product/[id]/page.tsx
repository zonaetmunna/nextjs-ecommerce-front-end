"use client";
import { addToCart } from "@/features/cart/cartSlice";
import { useGetSingleProductQuery } from "@/features/product/productApi";
import { AppDispatch } from "@/features/store";
import { addToWishlist } from "@/features/wishlist/wishlistSlice";
import { IProduct } from "@/types/types";
import Image from "next/image";
import toast from "react-hot-toast";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";

type Params = {
  params: {
    id: string;
  };
};
function ProductDetails({ params: { id } }: Params) {
  const { data, error, isError, isLoading } = useGetSingleProductQuery(id);
  const product = data?.data;
  const dispatch = useDispatch<AppDispatch>();
  const handleAddToCart = async (product: IProduct) => {
    try {
      dispatch(addToCart(product));
      toast.success("Product added to cart");
    } catch (error) {
      toast.error("Failed to add product to cart");
    }
  };

  const handleAddToWishlist = () => {
    try {
      dispatch(addToWishlist(product));
      toast.success("Product added to wishlist");
    } catch (error) {
      toast.error("Failed to add product to wishlist");
    }
  };
  return (
    <div className="container mx-auto p-8">
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error occurred</p>
      ) : (
        <div className="flex">
          {product && (
            <div className="w-1/2">
              <Image
                src={product.image}
                alt={product.name}
                width={800}
                height={800}
                className="w-full h-auto"
              />
            </div>
          )}
          <div className="w-1/2 ml-8">
            <h2 className="text-2xl font-bold mb-4">{product?.name}</h2>
            <p className="text-gray-700 mb-4">${product?.price}</p>
            <p className="text-gray-700 mb-4">Category: {product?.category}</p>
            <p className="text-gray-700 mb-4">Stock: {product?.stock}</p>
            <p className="text-gray-700 mb-4">{product?.description}</p>
            <div className="flex space-x-4">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                onClick={() => handleAddToCart(product)}
              >
                <FiShoppingCart className="inline-block mr-2" />
                Add to Cart
              </button>
              <button
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                onClick={handleAddToWishlist}
              >
                <FiHeart className="inline-block mr-2" />
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
