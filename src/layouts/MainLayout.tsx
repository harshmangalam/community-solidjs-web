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

const MainLayout: Component = () => {
  return (
    <Box>
      {/* navbar  */}
      <Flex
        py={"$4"}
        bg="$blackAlpha10"
        justifyContent={"space-between"}
        px="$4"
      >
        <Link href="/">
          <HStack spacing={"$2"}>
            <Icon as={SiHashnode} w={"$6"} h={"$6"} />
            <Heading fontSize={"$2xl"}>Community</Heading>
          </HStack>
        </Link>

        <HStack spacing={"$2"}>
          <Button variant={"subtle"} colorScheme="info" leftIcon={<BsPencilSquare size={20} />}>Write</Button>
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
      {/* main  */}

      <Box as="main">
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
