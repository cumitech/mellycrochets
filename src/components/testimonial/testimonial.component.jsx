"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

const testimonials = [
  {
    quote:
      "I've never had such a seamless experience buying a car! Their honesty and transparency made all the difference.",
    name: "John Doe",
    role: "Verified Customer",
  },
  {
    quote:
      "The best car rental service! Affordable prices and great customer support.",
    name: "Sarah Johnson",
    role: "Happy Renter",
  },
  {
    quote: "Trustworthy and reliable. I got my dream car with no hidden costs!",
    name: "Michael Brown",
    role: "Satisfied Buyer",
  },
];

const TestimonialSlider = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
          What Our Customers Say
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="mt-8"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 text-center">
                <p className="text-gray-700 text-lg italic">
                  "{testimonial.quote}"
                </p>
                <div className="mt-4">
                  <h4 className="text-gray-900 font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSlider;
