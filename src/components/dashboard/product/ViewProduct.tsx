import { IProduct } from "@/types/types";

interface Props {
  onClose: () => void;
  product: IProduct | null;
}
export default function ViewProduct({ onClose, product }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
      <div className="relative w-full max-w-md mx-auto bg-white rounded-lg shadow-lg">
        <div className="px-6 py-8">
          <h2 className="text-3xl font-bold mb-4">{product?.name}</h2>
          <div className="mb-4">
            <p className="text-gray-600 mb-1">
              <span className="font-semibold">description:</span>{" "}
              {product?.description}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-semibold">Price:</span> {product?.price}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-semibold">category</span>{" "}
              {product?.category}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-semibold">stock:</span> {product?.stock}
            </p>
          </div>
          <button
            className="block w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-300"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
