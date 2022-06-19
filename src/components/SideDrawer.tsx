import {
  Box,
  createDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Icon,
  IconButton,
  Text,
  Tooltip,
  VStack,
} from "@hope-ui/solid";
import { Component, For } from "solid-js";
import Logo from "./Logo";
import { CgMenuRight } from "solid-icons/cg";

import { BsGithub } from "solid-icons/bs";
import { FaBrandsDev } from "solid-icons/fa";
import { BsTwitter } from "solid-icons/bs";

import { VscHome } from "solid-icons/vsc";
import { AiOutlineCompass } from "solid-icons/ai";
import { RiDocumentDraftLine } from "solid-icons/ri";
import { BsBookmarkHeart } from "solid-icons/bs";
import { TiTags } from "solid-icons/ti";
import { BsViewList } from "solid-icons/bs";
import { RiDocumentArticleLine } from "solid-icons/ri";

import { Link } from "solid-app-router";

const SideDrawer: Component = () => {
  return function DrawerExample() {
    const { isOpen, onOpen, onClose } = createDisclosure();

    return (
      <>
        <Tooltip label="Open drawer">
          <IconButton
            aria-label="Toggle drawer"
            onClick={onOpen}
            icon={<CgMenuRight size={28} />}
            variant="ghost"
            colorScheme={"neutral"}
          />
        </Tooltip>
        <Drawer opened={isOpen()} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Logo />
            </DrawerHeader>

            <DrawerBody>
              <Box>
                <VStack spacing={"$2"} alignItems={"flex-start"}>
                  <For each={links}>
                    {(link) => (
                      <HStack
                        as={Link}
                        href={`/${link.href}`}
                        spacing={"$4"}
                        py="$2"
                        px={"$2"}
                        _hover={{ bg: "$neutral6" }}
                        w="$full"
                        rounded={"$md"}
                      >
                        <Icon as={link.icon} w={"$6"} h={"$6"} />
                        <Text fontSize="$lg">{link.name}</Text>
                      </HStack>
                    )}
                  </For>
                </VStack>
              </Box>
            </DrawerBody>

            <DrawerFooter justifyContent={"center"}>
              <VStack spacing={"$2"}>
                <Box textAlign={"center"}>
                  <Text as={"span"} fontWeight="$semibold">
                    Community
                  </Text>{" "}
                  <Text as={"span"} fontSize={"$sm"}>
                    &bull; Made for community by community
                  </Text>
                </Box>
                <HStack spacing={"$4"}>
                  <For each={socialLinks}>
                    {(link) => (
                      <IconButton
                        aria-label={link.name}
                        icon={link.icon()}
                        variant="subtle"
                        colorScheme={"neutral"}
                        rounded="$full"
                      />
                    )}
                  </For>
                </HStack>
              </VStack>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    );
  };
};

export default SideDrawer;

const socialLinks = [
  {
    name: "Github",
    icon: () => <BsGithub size={20} />,
    link: "",
  },
  {
    name: "DEV Community",
    icon: () => <FaBrandsDev size={20} />,
    link: "",
  },
  {
    name: "Twitter",
    icon: () => <BsTwitter size={20} />,
    link: "",
  },
];

{
  /* const links = [
  {
    name: "Home",
    icon: () => <VscHome size={24} />,
    href: "",
  },
  {
    name: "Explore",
    icon: () => <AiOutlineCompass size={24} />,
    href: "",
  },
  {
    name: "Tags",
    icon: () => <TiTags size={24} />,
    href: "",
  },
  {
    name: "Listings",
    icon: () => <BsViewList size={24} />,
    href: "",
  },
  {
    name: "Drafts",
    icon: () => <RiDocumentDraftLine size={24} />,
    href: "",
  },
  {
    name: "Bookmarks",
    icon: () => <BsBookmarkHeart size={24} />,
    href: "",
  },
]; */
}

const links = [
  {
    name: "Home",
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
