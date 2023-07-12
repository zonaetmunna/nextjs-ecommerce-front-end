import { addToCart } from "@/features/cart/cartSlice";
import { AppDispatch } from "@/features/store";
import { addToWishlist } from "@/features/wishlist/wishlistSlice";
import { IProduct } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { FaDollarSign } from "react-icons/fa";
import { FiEye, FiHeart, FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";
const Fade = require("react-reveal/Fade");
const Zoom = require("react-reveal/Zoom");

export default function ProductCard({ product }: { product: IProduct }) {
  const { name, image, price, stock, category, _id } = product;
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = async (product: IProduct) => {
    try {
      dispatch(addToCart(product));
      toast.success("Product added to cart");
    } catch (error) {
      toast.error("Failed to add product to cart");
    }
  };

  const handleAddToWishlist = async () => {
    try {
      dispatch(addToWishlist(product));
      toast.success("Product added to wishlist");
    } catch (error) {
      toast.error("Failed to add product to wishlist");
    }
  };

  return (
    <Fade bottom>
      <div className="product-card bg-white shadow-lg rounded-lg hover:cursor-pointer hover:shadow-lg">
        <Zoom>
          <div className="product-image">
            <Image
              className="w-full h-full"
              src={image}
              alt="Accessories"
              width={1200}
              height={800}
            />
          </div>
        </Zoom>
        <div className="product-details p-5">
          <h2 className="text-xl font-bold">{name}</h2>
          <div>
            <p className="text-gray-700 flex items-center">
              <FaDollarSign />
              {price}
            </p>
          </div>

          <p className="text-gray-700">Category: {category}</p>

          <div className="buttons mt-4 space-x-2 flex justify-center items-center">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              onClick={() => handleAddToCart(product)}
            >
              <FiShoppingCart className="inline-block mr-2" />
            </button>
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
              onClick={handleAddToWishlist}
            >
              <FiHeart className="inline-block mr-2" />
            </button>
            <Link
              href={`/product/${_id}`}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
            >
              <FiEye className="inline-block mr-2" />
            </Link>
          </div>
        </div>
      </div>
    </Fade>
  );
}
