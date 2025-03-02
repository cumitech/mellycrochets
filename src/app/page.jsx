"use client";
import { Suspense } from "react";
import "../assets/css/globals.css";
import AppNavigation from "../components/nav.component";
import Footer from "../components/footer/footer.component";
import LandingPage from "../components/landing-page";

export default function IndexPage() {
  return (
    <Suspense>
      <AppNavigation />
      <LandingPage/>
      {/* Footer */}
      <Footer />
    </Suspense>
  );
}
