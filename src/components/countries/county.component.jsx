"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SpinnerList from "../../components/spinner-list";
import { Col, Empty } from "antd";
import { API_URL } from "../../constants/api-url";
import { countryAPI } from "../../store/api/country_api";

const ExploreCars = () => {
  const {
    data: countries,
    isLoading: isLoadingCountry,
    isFetching: isFetchCountry,
  } = countryAPI.useFetchAllCountriesQuery(1);

  return (
    <section className="pb-20 md:pb-36">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-center" data-aos="fade-up">
          <div className="text-center max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Explore Cars by Country
            </h2>
            <p className="text-gray-600 mt-2">
              Browse cars from the world's top automobile-producing countries.
            </p>
          </div>
        </div>

        {/* Responsive Grid Layout */}
        {(isLoadingCountry || isFetchCountry) && (
          <motion.div
            className="box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <SpinnerList />
          </motion.div>
        )}
        {countries && countries.length ? (
          <div
            className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {countries?.map((country, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300"
              >
                {/* Image Wrapper */}
                <div className="relative w-full h-56">
                  <Image
                    src={`${API_URL}${country.image}`}
                    alt={country.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>

                {/* Content */}
                <div className="p-5 text-center">
                  <h6 className="text-xl font-semibold text-gray-800">
                    {country.name} {country.code}
                  </h6>
                  <p className="text-gray-600">{10} Cars Available</p>
                  <Link href="/cars-by-country" className="view-country-link">
                    See All Cars
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Col span={24}>
            <div className="empty-wrap">
              <Empty />
            </div>
          </Col>
        )}
      </div>
    </section>
  );
};

export default ExploreCars;
