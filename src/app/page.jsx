"use client";

import { Suspense } from "react";

import "../assets/css/globals.css";
import AppNavigation from "../components/nav.component";
import Footer from "../components/footer/footer.component";

export default function IndexPage() {
  return (
    <Suspense>
      <AppNavigation />



      {/* Footer */}
      <Footer />
    </Suspense>
  );
}
