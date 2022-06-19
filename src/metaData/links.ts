import { AiOutlineCompass } from "solid-icons/ai";
import {
  BsBookmarkHeart,
  BsGithub,
  BsTwitter,
  BsViewList,
} from "solid-icons/bs";
import { FaBrandsDev } from "solid-icons/fa";
import { RiDocumentArticleLine, RiDocumentDraftLine } from "solid-icons/ri";
import { TiTags } from "solid-icons/ti";
import { VscHome } from "solid-icons/vsc";

export const menuLinks = [
  {
    name: "Feeds",
    icon: VscHome,
    href: "",
  },
  {
    name: "Explore",
    icon: AiOutlineCompass,
    href: "explore",
  },
  {
    name: "Articles",
    icon: RiDocumentArticleLine,
    href: "articles",
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
