import {
  BsBookmarkHeart,
  BsGithub,
  BsTwitter,
  BsViewList,
} from "solid-icons/bs";
import { FaBrandsDev } from "solid-icons/fa";
import { RiDocumentDraftLine } from "solid-icons/ri";
import { TiTags } from "solid-icons/ti";
import { VscHome } from "solid-icons/vsc";
import { BiSearch } from "solid-icons/bi";
import { RiDocumentArticleLine } from "solid-icons/ri";

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
    name: "Listings",
    icon: BsViewList,
    href: "listings",
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
    name: "Drafts",
    icon: RiDocumentDraftLine,
    href: "drafts",
  },
  {
    name: "Bookmarks",
    icon: BsBookmarkHeart,
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
