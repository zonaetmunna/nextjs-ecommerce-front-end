"use client";

import { AppDispatch, RootState } from "@/features/store";
import { removeFromWishlist } from "@/features/wishlist/wishlistSlice";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { MdRemoveCircleOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
function Wishlist() {
  const { wishlist } = useSelector((state: RootState) => state.wishlist);
  const dispatch = useDispatch<AppDispatch>();

  const handleRemove = (productId: string) => {
    try {
      dispatch(removeFromWishlist(productId));
      toast.success("Product deleted to wishlist");
    } catch (error) {
      toast.error("Failed to delete product to wishlist");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-bold mb-4">WishList</h1>
      {wishlist.length > 0 ? (
        <>
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-400">
                <th className="text-left font-normal py-2 w-2/5">Item</th>
                <th className="text-left font-normal py-2">Price</th>

                <th className="text-left font-normal py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {wishlist &&
                wishlist?.map((item) => (
                  <tr key={item._id} className="border-b border-gray-400">
                    <td className="py-4">
                      <div className="flex items-center">
                        <Image
                          className="h-16 w-16 object-cover rounded"
                          src={item?.image}
                          alt={item?.name}
                          width={100}
                          height={100}
                        />
                        <div className="ml-4">
                          <h2 className="font-bold text-lg">{item?.name}</h2>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">${item?.price}</td>
                    <td className="py-4">
                      <button
                        className="hover:text-red-600"
                        onClick={() =>
                          item && item._id && handleRemove(item._id)
                        }
                      >
                        <MdRemoveCircleOutline className="h-6 w-6 fill-current" />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </>
      ) : (
        <p className="text-lg">Your cart is empty</p>
      )}
    </div>
  );
}

export default Wishlist;
