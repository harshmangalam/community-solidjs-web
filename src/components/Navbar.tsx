import { Component } from "solid-js";
import { BsGithub } from "solid-icons/bs";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Notifications from "@/components/Notifications";
import ProfileMenu from "@/components/ProfileMenu";

import { BsPencilSquare } from "solid-icons/bs";
import Search from "@/components/Search";
import Logo from "@/components/Logo";
import SideDrawer from "@/components/SideDrawer";
import { Box, Button, Flex, HStack, IconButton } from "@hope-ui/solid";
const Navbar: Component = () => {
  return (
    <Box
      bg="$neutral4"
      pos={"fixed"}
      top={0}
      left={0}
      right={0}
      zIndex="$sticky"
    >
      <Flex
        py={"$4"}
        justifyContent={"space-between"}
        mx={"auto"}
        as="nav"
        px={"$4"}
        maxW={"$containerXl"}
      >
        <HStack spacing={"$2"}>
          {/* drawer  */}
          <SideDrawer />
          <Logo />
        </HStack>

        <Box display={{ "@initial": "none", "@md": "block" }}>
          <Search />
        </Box>

        <HStack spacing={"$2"} display={{ "@initial": "none", "@md": "flex" }}>
          <Button
            variant={"subtle"}
            colorScheme="info"
            leftIcon={<BsPencilSquare size={20} />}
          >
            Write
          </Button>
          <IconButton
            aria-label="Github Repo"
            icon={<BsGithub size={24} />}
            variant={"ghost"}
            colorScheme="neutral"
          />
          <ThemeSwitcher />
          <Notifications />
          <ProfileMenu />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
