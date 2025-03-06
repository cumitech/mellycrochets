"use client";

import { Suspense, useEffect } from "react";

import "../assets/css/globals.css";
import AppNavigation from "../components/nav.component";
import Footer from "../components/footer/footer.component";
import { gelocation } from "../lib/geolocation";

export default async function IndexPage() {
  const { response } = await gelocation();

  return (
    <Suspense>
      <AppNavigation />

      {/* Footer */}
      <Footer />
    </Suspense>
  );
}
