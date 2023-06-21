"use client";
import ProductCard from "@/app/productCard";
import { addToCart } from "@/features/cart/cartSlice";
import {
  useGetCategoryProductsQuery,
  useGetSingleProductQuery,
} from "@/features/product/productApi";
import { AppDispatch } from "@/features/store";
import { addToWishlist } from "@/features/wishlist/wishlistSlice";
import { IProduct } from "@/types/types";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";

const Description = ({ description }: { description: string }) => {
  return (
    <div>
      <p>{description}</p>
    </div>
  );
};

const Review = ({ productId }: { productId: string }) => {
  // Implement the Review component functionality
  return (
    <div>
      <h3>Reviews for Product {productId}</h3>
      {/* Render review content */}
    </div>
  );
};

type Params = {
  params: {
    id: string;
  };
};
function ProductDetails({ params: { id } }: Params) {
  const [showDescription, setShowDescription] = useState(true);
  const [showReview, setShowReview] = useState(false);
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

  const handleDescriptionClick = () => {
    setShowDescription(true);
    setShowReview(false);
  };

  const handleReviewClick = () => {
    setShowDescription(false);
    setShowReview(true);
  };

  const { data: categoryProduct } = useGetCategoryProductsQuery(
    product?.category || ""
  );
  const categoriesProduct = categoryProduct?.data.products;

  return (
    <div className="container mx-auto p-8">
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error occurred</p>
      ) : (
        <div>
          <div className="flex">
            {product && (
              <div className="w-1/2 h-1/3">
                <div>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-full"
                  />
                </div>
                <div>
                  {product?.otherImages.map((image) => (
                    <Image
                      key={image}
                      src={image}
                      alt={product.name}
                      width={100}
                      height={100}
                      className="w-full h-full"
                    />
                  ))}
                </div>
              </div>
            )}
            <div className="w-1/2 ml-8">
              <h2 className="text-2xl font-bold mb-4">{product?.name}</h2>
              <p className="text-gray-700 mb-4">${product?.price}</p>
              <p className="text-gray-700 mb-4">
                Category: {product?.category}
              </p>
              <p className="text-gray-700 mb-4">Stock: {product?.stock}</p>
              <p className="text-gray-700 mb-4">{product?.description}</p>
              <div className="flex space-x-4">
                {product && (
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    onClick={() => handleAddToCart(product)}
                  >
                    <FiShoppingCart className="inline-block mr-2" />
                    Add to Cart
                  </button>
                )}
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
          {/* description and review */}
          <div>
            <div className="flex items-center space-x-4 mt-10">
              <div>
                <button
                  className={`${
                    showDescription
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-gray-700"
                  } px-4 py-2 rounded`}
                  onClick={handleDescriptionClick}
                >
                  Description
                </button>
              </div>
              <div>
                <button
                  className={`${
                    showReview
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-gray-700"
                  } px-4 py-2 rounded`}
                  onClick={handleReviewClick}
                >
                  Reviews
                </button>
              </div>
            </div>
            <hr className="h-px bg-gray-300" />
            {showDescription && (
              <Description description={product?.description} />
            )}
            {showReview && <Review productId={id} />}
          </div>
          {/* related products */}
          <div>
            <h3>Related Products</h3>
            <hr className="h-px bg-gray-300" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categoriesProduct &&
                categoriesProduct.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
