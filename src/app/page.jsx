"use client";

import { Suspense } from "react";

import "../assets/css/globals.css";
import Link from "next/link";
import AppNavigation from "../components/nav.component";
import Hero from "../components/hero.component";
import FilterCars from "../components/filter-cars/filter-car.component";
import Listings from "../components/listings/listing.component";
import ExploreCars from "../components/countries/county.component";
import HowWeHelp from "../components/how-can-we-help/how-can-we-help.component";
import ContactSection from "../components/contact/contact.component";
import WhyChooseUs from "../components/why-chose-us/why-chose-us.component";
import TestimonialSlider from "../components/testimonial/testimonial.component";
import Footer from "../components/footer/footer.component";

export default function IndexPage() {
  return (
    <Suspense>
      <AppNavigation />

      {/* Hero Slide */}
      <Hero />

      {/* filter content */}
      <FilterCars />

      {/* listings */}
      <div className="w-full px-10 py-10" data-aos="fade-up">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-3/4">
            <h2 className="text-2xl font-bold">
              Discover Our Featured Listings
            </h2>
            <p className="text-gray-600">
              Aliquam lacinia diam quis lacus euismod
            </p>
          </div>
          <div className="lg:w-1/4 text-left lg:text-right mt-3 lg:mt-0">
            <Link
              href="/grid-full-2-col"
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              See All Properties <i className="fal fa-arrow-right-long" />
            </Link>
          </div>
        </div>

        {/* listings */}
        <Listings />
      </div>

      {/* ExploreCars */}
      <ExploreCars />

      {/* EMSHelp */}
      <HowWeHelp />

      {/* ContactSection  */}
      <ContactSection />

      {/* WhyChooseUs */}
      <WhyChooseUs />

      {/* TestimonialSlider */}
      <TestimonialSlider />

      {/* Footer */}
      <Footer />
    </Suspense>
  );
}
