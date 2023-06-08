import Link from "next/link";
export default function Banner() {
  return (
    <div className="bg-gray-800">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Welcome to our</span>
            <span className="block">Online Store</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-300">
            Get the best deals on your favorite products.
          </p>
          <div className="mt-6">
            <Link href="/shop">
              <p className="inline-block bg-indigo-500 hover:bg-indigo-600 px-6 py-3 border border-transparent rounded-md font-medium text-white transition duration-150 ease-in-out">
                Shop Now
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
