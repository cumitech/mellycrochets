// icons
import { IoLogoModelS } from "react-icons/io";
import {
  MdEngineering,
  MdFlag,
  MdOutlineBrowseGallery,
  MdOutlinePermMedia,
} from "react-icons/md";
import { TbSettingsAutomation } from "react-icons/tb";
import { FcDataConfiguration, FcEngineering } from "react-icons/fc";
import { BsFuelPump } from "react-icons/bs";
import { BiLocationPlus } from "react-icons/bi";
import {
  RiCarFill,
  RiMailSettingsLine,
  RiPsychotherapyFill,
} from "react-icons/ri";
import { FiGitPullRequest } from "react-icons/fi";
import { GrUserSettings } from "react-icons/gr";
import { FaUserShield } from "react-icons/fa";

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
      name: "subscribers",
      list: "/dashboard/subscribers",
      create: "/dashboard/subscribers/create",
      edit: "/dashboard/subscribers/edit/:id",
      show: "/dashboard/subscribers/show/:id",
      meta: {
        canAccess: ["admin", "editor"],
      },
      icon: <MdOutlinePermMedia />,
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
      icon: <MdOutlinePermMedia />,
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
      icon: <MdOutlinePermMedia />,
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
