// icons
import { MdOutlinePermMedia, MdOutlineTag, MdPayments } from "react-icons/md";
import { FcDataConfiguration } from "react-icons/fc";
import { GiShoppingCart } from "react-icons/gi";
import { GrUserSettings } from "react-icons/gr";
import { FaUserShield } from "react-icons/fa";
import { FaUsersViewfinder } from "react-icons/fa6";
import { BiCategory } from "react-icons/bi";

export const useMenu = () => {
  const menus = [
    {
      name: "dashboard",
      label: "Dashboard",
    },
    {
      name: "posts",
      list: "/dashboard/posts",
      create: "/dashboard/posts/create",
      edit: "/dashboard/posts/edit/:id",
      show: "/dashboard/posts/show/:id",
      meta: {
        // canDelete: true,
        canAccess: ["admin", "editor"],
      },
      icon: <MdOutlinePermMedia />,
    },
    {
      name: "orders",
      list: "/dashboard/orders",
      create: "/dashboard/orders/create",
      edit: "/dashboard/orders/edit/:id",
      show: "/dashboard/orders/show/:id",
      meta: {
        // canDelete: true,
        canAccess: ["admin", "editor"],
      },
      icon: <GiShoppingCart />,
    },
    {
      name: "payments",
      list: "/dashboard/payments",
      create: "/dashboard/payments/create",
      edit: "/dashboard/payments/edit/:id",
      show: "/dashboard/payments/show/:id",
      meta: {
        // canDelete: true,
        canAccess: ["admin", "editor"],
      },
      icon: <MdPayments />,
    },
    {
      name: "subscribers",
      list: "/dashboard/subscribers",
      create: "/dashboard/subscribers/create",
      edit: "/dashboard/subscribers/edit/:id",
      show: "/dashboard/subscribers/show/:id",
      meta: {
        canAccess: ["admin", "editor"],
      },
      icon: <FaUsersViewfinder />,
    },
    {
      name: "configurations",
      meta: {
        canAccess: ["admin", "editor"],
      },
      icon: <FcDataConfiguration />,
    },
    {
      name: "media",
      list: "/dashboard/media",
      create: "/dashboard/media/create",
      edit: "/dashboard/media/edit/:id",
      show: "/dashboard/media/show/:id",
      parentName: "configurations",
      meta: {
        // canDelete: true,
        canAccess: ["admin", "editor"],
        parent: "configurations",
      },
      icon: <MdOutlinePermMedia />,
    },
    {
      name: "categories",
      list: "/dashboard/categories",
      create: "/dashboard/categories/create",
      edit: "/dashboard/categories/edit/:id",
      show: "/dashboard/categories/show/:id",
      parentName: "configurations",
      meta: {
        // canDelete: true,
        canAccess: ["admin", "editor"],
        parent: "configurations",
      },
      icon: <BiCategory />,
    },
    {
      name: "tags",
      list: "/dashboard/tags",
      create: "/dashboard/tags/create",
      edit: "/dashboard/tags/edit/:id",
      show: "/dashboard/tags/show/:id",
      parentName: "configurations",
      meta: {
        // canDelete: true,
        canAccess: ["admin", "editor"],
        parent: "configurations",
      },
      icon: <MdOutlineTag />,
    },
    {
      name: "settings",
      meta: {
        // canDelete: true,
        canAccess: ["admin"],
        label: "Settings",
      },
      icon: <FaUserShield />,
    },
    {
      name: "users",
      list: "/dashboard/users",
      show: "/dashboard/users/show/:id",
      parentName: "settings",
      meta: {
        canAccess: ["admin"],
        parent: "settings",
      },
      icon: <GrUserSettings />,
    },
  ];

  return { menus };
};
