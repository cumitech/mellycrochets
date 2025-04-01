"use client";

import { Image, Space } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { BiMenu } from "react-icons/bi";
import AppLanguage from "./shared/language.component";
import ShoppingCart from "./shopping-cart/shopping-cart";
import { useTranslations } from "next-intl";
import { useGetIdentity } from "@refinedev/core";
import { useSocket } from "../providers/socket";
import { CartService } from "../service/cart.service";
import AppCurrency from "./shared/currency.component";
import { crochetTypeAPI } from "@/store/api/crochet_type_api";
import AppNavigationSkeleton from "./nav-skeleton.component";
import CrochetDropdown from "./shared/crochet-type-menu.component";
import CrochetDropdownV2 from "./shared/crochet-type-menu-v2.component";

const AppNavigation = () => {
  const {
    data: crochetTypes,
    isLoading,
    isFetching,
  } = crochetTypeAPI.useFetchAllCrochetTypesQuery(1);

  const [isOpen, setOpen] = useState(false);
  const { data: user } = useGetIdentity({});
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const menuRef = useRef(null);
  const navRef = useRef(null);

  const pathname = usePathname();
  const t = useTranslations("navigation");

  const role = user?.role;

  const socket = useSocket();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !navRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mouseover", handleOutsideClick);
      document.addEventListener("touchstart", handleOutsideClick);
    } else {
      document.removeEventListener("mouseover", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mouseover", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!socket) return;

    const handleCartEvent = (data) => {
      setCartItems(data);
      setCartCount(data.length);
    };

    socket.on("cart-updated", handleCartEvent);

    return () => {
      socket.off("cart-updated", handleCartEvent); // Cleanup
    };
  }, [socket]);

  useEffect(() => {
    CartService.list()
      .then((res) => {
        setCartItems(res);
        setCartCount(res.length);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading || isFetching) {
    return <AppNavigationSkeleton />;
  }
  return (
    <nav
      ref={navRef}
      className="bg-[#fdf3f3] py-1 px-10 md:px-30 lg:px-50 shadow-md z-10 w-full"
    >
      <div className="flex justify-between items-center">
        <div className="aspect-w-16 aspect-h-9 text-2xl font-bold text-gray-900">
          <Link href="/">
            <Image
              src="/logo.png"
              preview={false}
              width={120}
              height={90}
              alt="logo"
              // className="w-full h-auto object-cover"
              className="w-28 md:w-36 lg:w-44 h-auto object-contain"
            />
          </Link>
        </div>

        {/* desktop menus */}
        <div
          className="hidden md:flex space-x-4"
          style={{ alignItems: "center" }}
        >
          <Link
            href="/"
            className={`nav-link font-playfair  ${
              pathname === "/" ? "active" : ""
            }`}
          >
            {t("home")}
          </Link>

          <Link
            href="/shop"
            className={`nav-link font-playfair  ${
              pathname === "/shop" ? "active" : ""
            }`}
            // style={{ marginRight: 0 }}
          >
            {t("shop")}
          </Link>
          {crochetTypes && crochetTypes.length > 0 && (
            <CrochetDropdownV2 crochetTypes={crochetTypes} />
          )}

          <Link
            href="/about"
            className={`nav-link font-playfair  ${
              pathname === "/about" ? "active" : ""
            }`}
          >
            {t("about")}
          </Link>

          <Link
            href="/blog_posts"
            className={`nav-link font-playfair  ${
              pathname === "/blog_posts" ? "active" : ""
            }`}
          >
            {t("article")}
          </Link>

          <Link
            href="/contact"
            className={`nav-link font-playfair  ${
              pathname === "/contact" ? "active" : ""
            }`}
          >
            {t("contact")}
          </Link>

          <Space>
            <AppLanguage />
            <AppCurrency />
          </Space>

          <div className="shoppingCart">
            <ShoppingCart cartCount={cartCount} cartItems={cartItems} />
          </div>
          {!user && (
            <Link
              href="/login"
              className={`nav-link font-playfair  ${
                pathname === "/login" ? "active" : ""
              }`}
            >
              Signin
            </Link>
          )}

          {role === "admin" && (
            <Link
              href="/dashboard"
              className={`nav-link font-playfair  ${
                pathname === "/dashboard" ? "active" : ""
              }`}
            >
              Admin
            </Link>
          )}
        </div>

        <div className="md:hidden lg:hidden xl:hidden absolute right-25 mb-0">
          <Space align="center">
            <AppLanguage />

            <AppCurrency />

            <div className="shoppingCart" style={{ marginLeft: 0 }}>
              <ShoppingCart cartCount={cartCount} cartItems={cartItems} />
            </div>
          </Space>
        </div>

        {/* mobile menu */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!isOpen)}
            className="py-1 px-1 bg-gray-100 rounded-lg cursor-pointer"
          >
            <BiMenu size={35} />
          </button>
        </div>

        {isOpen && (
          <div
            ref={menuRef}
            className="md:hidden absolute top-20 left-0 right-0 bg-[#fdf3f3] mt-3 py-5 px-10 md:px-30 lg:px-50 z-50"
          >
            <div className="flex flex-col space-y-6">
              <Link
                href="/"
                className={`nav-link font-playfair  ${
                  pathname === "/" ? "active" : ""
                }`}
                style={{ marginBottom: 10 }}
              >
                {t("home")}
              </Link>

              <Link
                href="/shop"
                className={`nav-link font-playfair  ${
                  pathname === "/shop" ? "active" : ""
                }`}
                style={{ marginBottom: 10 }}
              >
                {t("shop")}
              </Link>

              <div className="ml-[-15px] mb-[5px]">
                {crochetTypes && crochetTypes.length > 0 && (
                  <CrochetDropdownV2 crochetTypes={crochetTypes} />
                )}
              </div>

              <Link
                href="/about"
                className={`nav-link font-playfair  ${
                  pathname === "/about" ? "active" : ""
                }`}
                style={{ marginBottom: 10 }}
              >
                {t("about")}
              </Link>

              <Link
                href="/blog_posts"
                className={`nav-link font-playfair  ${
                  pathname === "/blog_posts" ? "active" : ""
                }`}
                style={{ marginBottom: 10 }}
              >
                {t("article")}
              </Link>

              <Link
                href="/contact"
                className={`nav-link font-playfair  ${
                  pathname === "/contact" ? "active" : ""
                }`}
                style={{ marginBottom: 10 }}
              >
                {t("contact")}
              </Link>

              {!user && (
                <Link
                  href="/login"
                  className={`nav-link font-playfair  ${
                    pathname === "/login" ? "active" : ""
                  }`}
                  style={{ marginBottom: 10 }}
                >
                  Signin
                </Link>
              )}

              {role === "admin" && (
                <Link
                  href="/dashboard"
                  className={`nav-link font-playfair  ${
                    pathname === "/dashboard" ? "active" : ""
                  }`}
                >
                  Admin
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default AppNavigation;
