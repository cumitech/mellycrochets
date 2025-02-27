"use client";

import { Suspense } from "react";

// import { Authenticated } from "@refinedev/core";
// import { NavigateToResource } from "@refinedev/nextjs-router";
import "../../assets/css/globals.css";

export default function IndexPage() {
  return (
    <Suspense>
      {/* <PageBreadCrumbs items={["Dashboard"]} /> */}
      
      {/* <Authenticated key="home-page">
        <NavigateToResource />
      </Authenticated> */}
    </Suspense>
  );
}
