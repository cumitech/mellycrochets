"use client";
// import Image from "next/image";
import Link from "next/link";
import { FaCarSide } from "react-icons/fa";
import { RiCarFill } from "react-icons/ri";
import { MdAssistant, MdSecurity } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

const iconboxData = [
  {
    id: 1,
    icon: <RiCarFill className="text-blue-600 text-6xl" />,
    title: "Car Rental Services",
    text: "Affordable and reliable car rental services for all occasions.",
    linkText: "Get Started",
  },
  {
    id: 2,
    icon: <FaCarSide className="text-green-600 text-6xl" />,
    title: "Fairly Used Cars",
    text: "Quality cars imported from Europe at unbeatable prices.",
    linkText: "Explore available cars",
  },
  {
    id: 4,
    icon: <MdAssistant className="text-yellow-600 text-6xl" />,
    title: "Consultation Services",
    text: "Expert advice to help you make informed car purchases.",
    linkText: "Book Now",
  },
  {
    id: 3,
    icon: <MdSecurity className="text-orange-600 text-6xl" />,
    title: "Insurance Plans",
    text: "Get secure and affordable car insurance for your vehicle.",
    linkText: "Get Covered",
  },
];

const HowWeHelp = () => {
  return (
    <section className="py-20 md:py-28 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className="text-center max-w-2xl mx-auto mb-12"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What We Offer
          </h2>
          <p className="text-gray-600 mt-2">
            High-quality car services to meet all your needs.
          </p>
        </div>

        {/* Grid Layout */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          data-aos="fade-up"
        >
          {iconboxData.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-6 text-center transition-all transform hover:scale-105 duration-300"
              data-aos="fade-up"
              data-aos-delay={(item.id + 1) * 100}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                {/* <Image
                  width={80}
                  height={80}
                  src={item.icon}
                  alt="icon"
                  className="w-20 h-20"
                /> */}
                {item.icon}
              </div>

              {/* Content */}
              <h4 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h4>
              <p className="text-gray-600 mt-2">{item.text}</p>

              {/* CTA Button */}
              <Link href="/grid-default" className="view-help-link">
                {/* <span className="inline-block mt-4 px-5 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-md transition-all"> */}
                {item.linkText} <FaArrowRight style={{ marginLeft: 5 }} />
                {/* </span> */}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
