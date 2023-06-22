"use client";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  return (
    <div className="my-5 py-10 px-10 text-black bg-gray-50 ">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="flex justify-around items-center">
            <div>
              <h2 className="text-4xl font-semibold">Mens Collection</h2>
              <p className="mt-2 text-xl">Explore our latest products</p>
              <Link href="/products">
                <p className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  Shop Now
                </p>
              </Link>
            </div>
            <div className="relative w-64 h-64">
              <Image
                src="https://i.ibb.co/XCZT2vQ/young-handsome.jpg"
                alt="Man"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-64 bg-gray-100">
            <Image
              className=" w-full h-full"
              src="https://i.ibb.co/VvhWD2Y/model.jpg"
              alt="Women"
              width={1200}
              height={800}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <h2 className="text-4xl font-semibold">Womens Collection</h2>
              <p className="mt-2 text-xl">Discover our latest arrivals</p>
              <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-64 bg-gray-100">
            <Image
              className=" w-full h-full"
              src="https://i.ibb.co/9wK2vHk/assecsoris.jpg"
              alt="Accessories"
              width={1200}
              height={800}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <h2 className="text-4xl font-semibold">Accessories</h2>
              <p className="mt-2 text-xl">Complete your look with style</p>
              <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
