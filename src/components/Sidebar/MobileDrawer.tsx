import {
  createDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Tooltip,
} from "@hope-ui/solid";
import { Component } from "solid-js";
import Logo from "../Logo";
import { CgMenuRight } from "solid-icons/cg";
import Footer from "../Footer";
import LinksBody from "@/components/Sidebar/LinksBody";

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
              <LinksBody />
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
