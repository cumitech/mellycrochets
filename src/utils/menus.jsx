// icons
import { IoLogoModelS } from "react-icons/io";
import { MdEngineering, MdFlag, MdOutlineBrowseGallery, MdOutlinePermMedia } from "react-icons/md";
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
    name: "cars",
    list: "/dashboard/cars",
    create: "/dashboard/cars/create",
    edit: "/dashboard/cars/edit/:id",
    show: "/dashboard/cars/show/:id",
    meta: {
      // canDelete: true,
      canAccess: ["admin", "editor"],
    },
    icon: <RiCarFill />,
  },
  {
    name: "inquiries",
    list: "/dashboard/inquiries",
    create: "/dashboard/inquiries/create",
    edit: "/dashboard/inquiries/edit/:id",
    show: "/dashboard/inquiries/show/:id",
    meta: {
      // canDelete: true,
      canAccess: ["admin", "editor"],
    },
    icon: <FiGitPullRequest />,
  },
  {
    name: "consultations",
    list: "/dashboard/consultations",
    create: "/dashboard/consultations/create",
    edit: "/dashboard/consultations/edit/:id",
    show: "/dashboard/consultations/show/:id",
    meta: {
      // canDelete: true,
      canAccess: ["admin", "editor"],
    },
    icon: <RiPsychotherapyFill />,
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
    name: "car_models",
    list: "/dashboard/car_models",
    create: "/dashboard/car_models/create",
    edit: "/dashboard/car_models/edit/:id",
    show: "/dashboard/car_models/show/:id",
    icon: <IoLogoModelS />,
    parentName: "configurations",
    meta: {
      // canDelete: true,
      canAccess: ["admin", "editor"],
      parent: "configurations",
    },
  },
  {
    name: "car_makes",
    list: "/dashboard/car_makes",
    create: "/dashboard/car_makes/create",
    edit: "/dashboard/car_makes/edit/:id",
    show: "/dashboard/car_makes/show/:id",
    parentName: "configurations",
    meta: {
      // canDelete: true,
      canAccess: ["admin", "editor"],
      parent: "configurations",
    },
    icon: <MdEngineering />,
  },
  {
    name: "car_transmissions",
    list: "/dashboard/car_transmissions",
    create: "/dashboard/car_transmissions/create",
    edit: "/dashboard/car_transmissions/edit/:id",
    show: "/dashboard/car_transmissions/show/:id",
    parentName: "configurations",
    meta: {
      // canDelete: true,
      canAccess: ["admin", "editor"],
      parent: "configurations",
    },
    icon: <TbSettingsAutomation />,
  },
  {
    name: "car_engines",
    list: "/dashboard/car_engines",
    create: "/dashboard/car_engines/create",
    edit: "/dashboard/car_engines/edit/:id",
    show: "/dashboard/car_engines/show/:id",
    parentName: "configurations",
    meta: {
      // canDelete: true,
      canAccess: ["admin", "editor"],
      parent: "configurations",
    },
    icon: <FcEngineering />,
  },
  {
    name: "fuel_types",
    list: "/dashboard/fuel_types",
    create: "/dashboard/fuel_types/create",
    edit: "/dashboard/fuel_types/edit/:id",
    show: "/dashboard/fuel_types/show/:id",
    parentName: "configurations",
    meta: {
      // canDelete: true,
      canAccess: ["admin", "editor"],
      parent: "configurations",
    },
    icon: <BsFuelPump />,
  },
  {
    name: "locations",
    list: "/dashboard/locations",
    create: "/dashboard/locations/create",
    edit: "/dashboard/locations/edit/:id",
    show: "/dashboard/locations/show/:id",
    parentName: "configurations",
    meta: {
      // canDelete: true,
      canAccess: ["admin", "editor"],
      parent: "configurations",
    },
    icon: <BiLocationPlus />,
  },
  {
    name: "countries",
    list: "/dashboard/countries",
    create: "/dashboard/countries/create",
    edit: "/dashboard/countries/edit/:id",
    show: "/dashboard/countries/show/:id",
    parentName: "configurations",
    meta: {
      // canDelete: true,
      canAccess: ["admin", "editor"],
      parent: "configurations",
    },
    icon: <MdFlag />,
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
    icon: <MdOutlinePermMedia  />,
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
