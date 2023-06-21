"use client";

import { useGetProductsQuery } from "@/features/product/productApi";
import Banner from "./banner";
import ProductCard from "./productCard";

export default function Home() {
  const { data, error, isError } = useGetProductsQuery({});
  const products = data?.data.products;

  return (
    <main className="">
      {/* slider banner */}
      <Banner />
      {/* category */}
      {/* top rated product */}
      {/* latest product */}
      {/* main product */}
      {/* women product */}
      {/* baby product */}
      {/* others */}
      {/* offer product */}
      <div className="grid grid-cols-3 gap-4">
        {/* {isError && <div>Error occurred: {error.message}</div>} */}
        {!isError && !data && <div>Loading...</div>}

        {data && (
          <>
            {products?.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </>
        )}
      </div>
    </main>
  );
}
