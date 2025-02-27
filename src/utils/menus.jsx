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

export const menus = [
  {
    name: "dashboard",
    label: "Dashboard",
  },
  {
    name: "configurations",
    meta: {
      // canDelete: true,
      // label: "Configurations",
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
    create: "/dashboard/users/create",
    edit: "/dashboard/users/edit/:id",
    show: "/dashboard/users/show/:id",
    parentName: "settings",
    meta: {
      // canDelete: true,
      canAccess: ["admin"],
      parent: "settings",
    },
    icon: <GrUserSettings />,
  },
];
