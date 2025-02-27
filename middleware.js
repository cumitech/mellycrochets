import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/auth/login", // Redirect users to this login page if not authenticated
  },
});

export const config = {
  matcher: ["/api/:path*", "/dashboard/:path*"], // Protect these routes
};
