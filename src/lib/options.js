import Auth0Provider from "next-auth/providers/auth0";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import { UserRepository } from "../data/repositories/user.repository";
import { emptyUser } from "../data/models/index";
import { nanoid } from "nanoid";

const userRepository = new UserRepository();

const authOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID ?? "",
      clientSecret: process.env.AUTH0_CLIENT_SECRET ?? "",
      issuer: process.env.AUTH0_ISSUER_BASE_URL ?? "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    FacebookProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    // Credentials (Email/Password)
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "you@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: credentials?.email,
                password: credentials?.password,
              }),
            }
          );

          if (!response.ok) throw new Error("Invalid credentials");

          const user = await response.json();
          return user; // User must contain { id, name, email, image }.
        } catch (error) {
          throw new Error(
            "Login failed. Please check your email and password."
          );
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile }) {
      // If user signs in, add their info to the token
      if (user) {
        const userItem = await userRepository.findByEmail(user.email);
        token.role = userItem.role;
      }
      return token;
    },

    async session({ session, token }) {
      // Add user info from token to session
      if (session.user) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
        session.user.provider = token.provider;
        session.user.role = token.role;
      }
      return session;
    },

    async signIn({ user, account, profile }) {
      console.log(user, account, profile);
      if (account?.provider !== "credentials") {
        try {
          // find user by email
          const existingUser = await userRepository.findByEmail(user.email);
          if (!existingUser) {
            console.log("Creating new user...");
            await userRepository.createUser({
              ...emptyUser,
              id: nanoid(20),
              username: user.name,
              email: user.email,
              image: user.image,
              provider: account?.provider,
              role: "user",
              verified: true,
            });
          }
        } catch (error) {
          console.log("Error: ", error.message);
          return false;
        }
      }
      return true;
    },
  },
  secret: process.env.AUTH0_SECRET,
};

export default authOptions;
