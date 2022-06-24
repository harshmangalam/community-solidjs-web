import { Component } from "solid-js";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Notifications from "@/components/Header/Notifications";
import ProfileMenu from "@/components/Header/ProfileMenu";

import Search from "@/components/Header/Search";
import Logo from "@/components/Logo";
import MobileDrawer from "@/components/Sidebar/MobileDrawer";
import { Box, Flex, HStack, useColorModeValue } from "@hope-ui/solid";
const Navbar: Component = () => {
  return (
    <Flex
      pos={"fixed"}
      top={0}
      left={0}
      right={0}
      zIndex="$sticky"
      h={"$16"}
      justifyContent={"space-between"}
      mx={"auto"}
      as="nav"
      px={"$4"}
      alignItems="center"
      borderBottomWidth={"thin"}
      borderBottomColor={"$neutral6"}
      bg={useColorModeValue("white", "$neutral1")()}
    >
      <HStack spacing={"$2"}>
        {/* drawer  */}
        <Box display={{ "@initial": "block", "@lg": "none" }}>
          <MobileDrawer />
        </Box>
        <Logo />
      </HStack>

      <Box display={{ "@initial": "none", "@lg": "block" }}>
        <Search />
      </Box>

      <HStack spacing={"$2"} display={{ "@initial": "none", "@sm": "flex" }}>
        <ThemeSwitcher />
        <Notifications />
        <ProfileMenu />
      </HStack>
    </Flex>
  );
};

export default Navbar;
