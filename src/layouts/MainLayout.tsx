import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
} from "@hope-ui/solid";
import { Link, Outlet } from "solid-app-router";
import type { Component } from "solid-js";
import { SiHashnode } from "solid-icons/si";
import { BsGithub } from "solid-icons/bs";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Notifications from "@/components/Notifications";
import ProfileMenu from "@/components/ProfileMenu";

import { BsPencilSquare } from "solid-icons/bs";
import Search from "@/components/Search";
import Logo from "@/components/Logo";
import SideDrawer from "@/components/SideDrawer";

const MainLayout: Component = () => {
  return (
    <Box>
      {/* navbar  */}
      <Box bg="$blackAlpha10">
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

          <Box>
            <Search />
          </Box>

          <HStack spacing={"$2"}>
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

      {/* main  */}

      <Box as="main">
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
