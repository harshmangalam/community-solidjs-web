import { BsBookmark, BsGithub, BsTwitter } from "solid-icons/bs";
import { FaBrandsDev } from "solid-icons/fa";
import { TiTags } from "solid-icons/ti";
import { VscHome } from "solid-icons/vsc";
import { BiSearch } from "solid-icons/bi";
import { BsPencilSquare } from "solid-icons/bs";
import { AiOutlineLogin } from "solid-icons/ai";
import { SiGnuprivacyguard } from "solid-icons/si";
export const menuLinks = [
  {
    name: "Home",
    icon: VscHome,
    href: "",
  },

  {
    name: "Tags",
    icon: TiTags,
    href: "tags",
  },

  {
    name: "Search",
    icon: BiSearch,
    href: "search",
  },
];

export const authUserLinks = [
  {
    name: "Write Article",
    icon: BsPencilSquare,
    href: "write-article",
  },
  {
    name: "Bookmarks",
    icon: BsBookmark,
    href: "bookmarks",
  },
];

export const unauthUserLinks = [
  {
    name: "Login",
    icon: AiOutlineLogin,
    href: "auth",
  },
  {
    name: "Signup",
    icon: SiGnuprivacyguard,
    href: "auth/signup",
  },
];

export const socialLinks = [
  {
    name: "Github",
    icon: BsGithub,
    link: "",
  },
  {
    name: "DEV Community",
    icon: FaBrandsDev,
    link: "",
  },
  {
    name: "Twitter",
    icon: BsTwitter,
    link: "",
  },
];
