"use client";

import Banner from "@/components/banner";
import CategroyCard from "@/components/categroyCard";
import ServiceBanner from "@/components/serviceBanner";
import SubscribeBanner from "@/components/subscribeBanner";
import { useGetBrandsQuery } from "@/features/brand/brandApi";
import { useGetCategoriesQuery } from "@/features/category/categoryApi";
import { useGetProductsQuery } from "@/features/product/productApi";
import { IBrand, ICategory } from "@/types/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./productCard";

export default function Home() {
  const { data, error, isError } = useGetProductsQuery({});
  const products = data?.data.products;
  const { data: categoriesData } = useGetCategoriesQuery({});
  const categories = categoriesData?.data.categories;
  const {
    data: brandsData,
    error: brandsError,
    isError: brandsIsError,
  } = useGetBrandsQuery({});
  const brands = brandsData?.data.brand;

  const fadeVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <main className="bg-gray-100">
      <div className="w-full flex items-center bg-white">
        {/* slider banner */}
        <div className="w-2/3">
          <Banner />
        </div>
        {/* Brands */}
        <div className="w-1/3 bg-white">
          {brands?.map((brand: IBrand) => (
            <Link
              href="/products"
              key={brand._id}
              className="bg-gray-100 mx-5 my-5 px-2 py-2 flex flex-col justify-center items-center shadow-md rounded-lg hover:shadow-lg"
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeVariants}
                transition={{ duration: 0.5 }}
              >
                <div className="w-20 h-20 relative">
                  <div className="w-full h-full aspect-w-1 aspect-h-1">
                    <Image
                      src={brand.imageUrl}
                      alt={brand.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <p className="text-md font-normal text-center mt-2">
                  {brand.name}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
      {/* category card*/}
      <div className="my-5 py-10 px-10">
        <h3 className="text-2xl font-bold text-center mb-5">Categories</h3>
        <div className="grid grid-cols-4 gap-4 ">
          {categories?.map((category: ICategory) => (
            <CategroyCard key={category._id} category={category} />
          ))}
        </div>
      </div>
      {/* men's collection */}
      <div className="my-5 py-10 px-10">
        <h3 className="text-2xl font-bold text-center mb-5">Mens Collection</h3>
        <Swiper
          spaceBetween={16}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
        >
          {products?.map((product) => (
            <SwiperSlide key={product._id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* women collection */}
      <div className="my-5 py-10 px-10">
        <h3 className="text-2xl font-bold text-center mb-5">
          Women Collection
        </h3>
        <Swiper
          spaceBetween={16}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
        >
          {products?.map((product) => (
            <SwiperSlide key={product._id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* accessories collection */}
      <div className="my-5 py-10 px-10">
        <h3 className="text-2xl font-bold text-center mb-5">
          Accessories Collection
        </h3>
        <Swiper
          spaceBetween={16}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
        >
          {products?.map((product) => (
            <SwiperSlide key={product._id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
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
      <ServiceBanner />
      <SubscribeBanner />
    </main>
  );
}
