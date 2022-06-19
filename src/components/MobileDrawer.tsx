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

import { Link } from "solid-app-router";
import { menuLinks, socialLinks } from "@/metaData/links";
import Footer from "./Footer";

const MobileDrawer: Component = () => {
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
                  <For each={menuLinks}>
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
              <Footer />
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    );
  };
};

export default MobileDrawer;
