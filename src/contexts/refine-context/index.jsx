"use client";

import { SessionProvider } from "next-auth/react";
import { App } from "../../app/_refine_context";

export const RefineContext = (props) => {
  return (
    <SessionProvider>
      <App {...props} />
    </SessionProvider>
  );
};
