import React from "react";
import { Autoplay, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Pagination } from "antd";

const AppHero = () => {
  return (
    <div className="flex justify-center items-center min-h-screen lg:pb-30 bg-gray-100">
      {/* Main Content */}
      <div className="relative w-full max-w-4xl lg:pt-16">
        {/* Floating Icons */}
        <div className="hidden md:block absolute w-full h-full pointer-events-none">
          <img
            src="/photos/icon3.jpg"
            alt="Decoration"
            className="absolute top-[-5%] left-[20%] w-12 h-12 md:w-16 md:h-16 rounded-full shadow-lg"
          />
          <img
            src="/photos/icon2.png"
            alt="Decoration"
            className="absolute top-[-5%] right-[10%] w-12 h-12 md:w-16 md:h-16 rounded-full shadow-lg"
          />
          <img
            src="/photos/icon1.png"
            alt="Decoration"
            className="absolute bottom-[40%] left-[-10%] w-12 h-12 md:w-16 md:h-16 rounded-full shadow-lg"
          />
          <img
            src="/photos/icon4.jpg"
            alt="Decoration"
            className="absolute bottom-[0] right-[70%] w-12 h-12 md:w-16 md:h-16 rounded-full shadow-lg"
          />
        </div>

        {/* Crochet Image Carousel */}
        <div className="mx-auto rounded-lg p-2">
          <Swiper
            direction="vertical"
            spaceBetween={30}
            slidesPerView={1}
            speed={1200}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Autoplay, Navigation]}
            className="custom_swiper w-full h-[80vh] rounded-lg"
          >
            <SwiperSlide className="flex justify-center">
              <img
                src="/photos/product-jpeg-1000x1000-1-removebg-preview.png"
                alt="Crochet Cardigan"
                className="w-[300px] lg:w-[600px] object-contain lg:object-contain rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <img
                src="/photos/68254a16642a7d7bcfe341fb778f29ed-removebg-preview.png"
                alt="Crochet Cardigan"
                className="w-[300px] lg:w-[600px] object-contain lg:object-contain rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <img
                src="/photos/c6f4bf8fe8d844642a5382dc33b8ae27-removebg-preview.png"
                alt="Crochet Cardigan"
                className="w-[300px] lg:w-[600px] object-contain lg:object-contain rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <img
                src="/photos/carkli-motifli-bayan-bol-yesil-hirka_-_Nazarca_com-removebg-preview.png"
                alt="Crochet Cardigan"
                className="w-[300px] lg:w-[600px] object-contain lg:object-contain rounded-lg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AppHero;
