"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs } from "swiper";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDropright } from "react-icons/io";
import { Button } from "antd";

const Hero = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const sliderItems = [
    {
      image: "/cars/car23.jpg",
      price: "$986,00",
      title: "Studio on Grand Avenue",
      description:
        "lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
    },
    {
      image: "/cars/car24.jpg",
      price: "$986,00",
      title: "Studio on Grand Avenue",
      description:
        "lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
    },
    {
      image: "/cars/car25.jpg",
      price: "$986,00",
      title: "Studio on Grand Avenue",
      description:
        "lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
    },
    {
      image: "/cars/car30.jpg",
      price: "$986,00",
      title: "Studio on Grand Avenue",
      description:
        "lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
    },
  ];

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 relative">
        {/* Main Swiper (Hero Carousel) */}
        <div className="relative w-full h-screen">
          <Swiper
            direction="vertical"
            spaceBetween={0}
            slidesPerView={1}
            speed={1400}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            modules={[Thumbs]}
            thumbs={{ swiper: thumbsSwiper }}
            className="h-full"
          >
            {sliderItems.map((item, index) => (
              <SwiperSlide key={index} className="relative">
                <div
                  className="h-full bg-cover bg-center flex items-center justify-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="w-full h-full bg-black/50 p-6 rounded-lg text-white flex items-center justify-center">
                    <div className="max-w-lg">
                      <h4 className="text-2xl font-bold">{item.price}</h4>
                      <h3 className=" text-4xl font-semibold">{item.title}</h3>
                      <p className="mb-6">{item.description}</p>
                      <Link
                        // size="large"
                        href={`/cars/${index + 1}`}
                        className="view-details-link"
                      >
                        <span className="mr-1 mb-1">View Details</span>
                        <IoIosArrowDropright size={20} />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Thumbnails Swiper (Sub-carousel) */}
        <div className="hidden md:block w-16 h-[268px] absolute right-10">
          <Swiper
            direction="vertical"
            spaceBetween={10}
            slidesPerView={sliderItems.length}
            watchSlidesProgress
            onSwiper={setThumbsSwiper}
            modules={[Thumbs]}
            className="h-full"
          >
            {sliderItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-16 overflow-hidden cursor-pointer border-2 border-transparent hover:border-orange-700 transition">
                  <Image
                    width={64}
                    height={64}
                    className="object-cover rounded-md"
                    src={item.image}
                    alt={`Thumbnail ${index + 1}`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile Thumbnails (Horizontal) */}
        {/* Shown only on small screens, hidden on larger screens */}
        <div className="md:hidden w-full absolute bottom-20">
          <Swiper
            spaceBetween={5}
            slidesPerView={4} // Show 3 thumbnails at a time on mobile
            watchSlidesProgress
            onSwiper={setThumbsSwiper}
            modules={[Thumbs]}
            className="w-full"
          >
            {sliderItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="w-24 h-16 overflow-hidden cursor-pointer border-2 border-transparent hover:border-orange-700 transition">
                  <Image
                    width={96}
                    height={64}
                    className="object-cover rounded-md"
                    src={item.image}
                    alt={`Thumbnail ${index + 1}`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Hero;
