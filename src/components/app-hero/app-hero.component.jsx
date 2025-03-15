import React from "react";
import { Autoplay, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

const AppHero = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      {/* Main Content */}
      <div className="relative pt-16 b-10">
        <div className="absolute">
          {/* Floating Icons */}
          <div className="hidden md:block absolute top-20 left-120 w-20 h-12 rounded-full shadow-lg">
            <img
              src="/photos/icon3.jpg"
              alt="Decoration"
              className="rounded-full"
            />
          </div>
          <div className="hidden md:block absolute top-20 right-35 w-20 h-12 rounded-full shadow-lg">
            <img
              src="/photos/icon2.png"
              alt="Decoration"
              className="rounded-full"
            />
          </div>
          <div className="hidden md:block absolute bottom-50 left-25 w-20 h-12 rounded-full shadow-lg">
            <img
              src="/photos/icon1.png"
              alt="Decoration"
              className="rounded-full"
            />
          </div>

          <div className="hidden md:block absolute bottom-[-500px] left-0 w-20 h-12 rounded-full shadow-lg">
            <img
              src="/photos/icon4.jpg"
              alt="Decoration"
              className="rounded-full"
            />
          </div>
        </div>

        {/* crochet Image */}
        <div className="mx-auto rounded-lg p-2">
          <Swiper
            direction="vertical"
            spaceBetween={50}
            slidesPerView={1}
            speed={1400}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            modules={[Thumbs, Autoplay]}
            touchReleaseOnEdges={true}
            // navigation={true}
            pagination={{ clickable: true }}
            className="w-full h-[600px]"
          >
            <SwiperSlide>
              <img
                src="/photos/product-jpeg-1000x1000-1-removebg-preview.png"
                alt="Crochet Cardigan"
                className="w-[500px] object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/photos/68254a16642a7d7bcfe341fb778f29ed-removebg-preview.png"
                alt="Crochet Cardigan"
                className="w-[500px] object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/photos/c6f4bf8fe8d844642a5382dc33b8ae27-removebg-preview.png"
                alt="Crochet Cardigan"
                className="w-[500px] object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/photos/carkli-motifli-bayan-bol-yesil-hirka_-_Nazarca_com-removebg-preview.png"
                alt="Crochet Cardigan"
                className="w-[500px] object-cover rounded-lg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AppHero;
