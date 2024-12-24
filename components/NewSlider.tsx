// components/NewSlider.tsx

"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/app/globals.css"; // Custom global styles

import Image from "next/image";

const images = [
  "/intro_pic_1.jpg",
  "/intro_pic_2.jpg",
  "/intro_pic_3.jpg",
  "/intro_pic_4.jpg",
  "/intro_pic_5.jpg",
];

const NewSlider = () => {
  return (
    <div className="relative w-full mt-10 max-w-6xl mx-auto">
      {/* Slider */}
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={900}
                height={500}
                className="w-[100vw] h-[60vh] rounded-lg object-cover"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewSlider;
