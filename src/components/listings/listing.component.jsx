import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import Image from "next/image";
import Link from "next/link";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { LuFullscreen } from "react-icons/lu";
import { ImNewTab } from "react-icons/im";
import { carAPI } from "../../store/api/car_api";
import { Col, Empty } from "antd";
import { API_URL_UPLOADS_MEDIA } from "../../constants/api-url";
import { useSelector } from "react-redux";

const Listings = () => {
  const { data: cars } = carAPI.useFetchAllCarsQuery(1);
  const filteredCars = useSelector((state) => state.cars.filteredCars);
  console.log("cars | filteredCars ", cars, filteredCars);

  const displayCars = filteredCars.length > 0 ? filteredCars : cars;

  useEffect(() => {}, [filteredCars]);
  return (
    <>
      <div className="mt-8" data-aos="fade-up" data-aos-delay="200">
        <Swiper
          spaceBetween={30}
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".featured-next__active",
            prevEl: ".featured-prev__active",
          }}
          pagination={{ el: ".featured-pagination__active", clickable: true }}
          slidesPerView={1}
          breakpoints={{
            300: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {displayCars && displayCars.length ? (
            <div
              className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-12"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {displayCars?.map((car, index) => (
                <SwiperSlide key={car.id} className="py-4">
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="relative">
                      <Image
                        width={382}
                        height={248}
                        className="w-full h-60 object-cover"
                        src={`${API_URL_UPLOADS_MEDIA}/${
                          car.Media[0]?.imageUrl || "nodata"
                        }`}
                        alt="car"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        {car.forRent && (
                          <span className="bg-red-500 text-white px-2 py-1 text-xs rounded">
                            FEATURED
                          </span>
                        )}
                        <span className="bg-green-500 text-white px-2 py-1 text-xs rounded">
                          FOR SALE
                        </span>
                      </div>
                      <div className="absolute top-3 right-3 flex space-x-2">
                        <Link
                          href="#"
                          className="text-white bg-black p-1 rounded-full"
                        >
                          <LuFullscreen size={25} />
                        </Link>
                        <Link
                          href="#"
                          className="text-white bg-black p-1 rounded-full"
                        >
                          <ImNewTab size={25} />
                        </Link>
                      </div>
                    </div>
                    <div className="p-4">
                      <h6 className="text-lg font-semibold">
                        <Link
                          href={`/cars/${car.id}`}
                          className="text-gray-800 hover:text-red-500"
                        >
                          {car.description}
                        </Link>
                      </h6>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-red-500 font-semibold">
                          {car.salesPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          ) : (
            <Col span={24}>
              <div className="empty-wrap">
                <Empty />
              </div>
            </Col>
          )}
        </Swiper>
      </div>

      <div className="flex items-center justify-center text-center space-x-4 mt-6">
        <button className="featured-prev__active bg-gray-200 p-2 rounded-full hover:bg-gray-300">
          <FaRegArrowAltCircleLeft size={25} />
        </button>
        <div className="pagination featured-pagination__active" />
        <button className="featured-next__active bg-gray-200 p-2 rounded-full hover:bg-gray-300">
          <FaRegArrowAltCircleRight size={25} />
        </button>
      </div>
    </>
  );
};

export default Listings;
