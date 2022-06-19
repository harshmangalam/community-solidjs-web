import { Component } from "solid-js";
import { BsGithub } from "solid-icons/bs";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Notifications from "@/components/Notifications";
import ProfileMenu from "@/components/ProfileMenu";

import { BsPencilSquare } from "solid-icons/bs";
import Search from "@/components/Search";
import Logo from "@/components/Logo";
import MobileDrawer from "@/components/MobileDrawer";
import { Box, Button, Flex, HStack, IconButton } from "@hope-ui/solid";
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
      bg="$neutral1"
    >
      <HStack spacing={"$2"}>
        {/* drawer  */}
        <Box display={{ "@initial": "block", "@md": "none" }}>
          <MobileDrawer />
        </Box>
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
  );
};

export default Navbar;
