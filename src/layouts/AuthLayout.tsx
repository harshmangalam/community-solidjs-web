import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { Box, Flex, HStack, useColorModeValue } from "@hope-ui/solid";
import { Outlet } from "solid-app-router";
import { Component } from "solid-js";

const AuthLayout: Component = () => {
  return (
    <Box>
      {/* header  */}
      <Flex
        borderBottomWidth={"thin"}
        borderBottomColor={"$neutral6"}
        bg={useColorModeValue("white", "$neutral1")()}
        justifyContent={"space-between"}
        alignItems="center"
        px={"$4"}
        h={"$16"}
      >
        <Logo />
        <HStack>
          <ThemeSwitcher />
        </HStack>
      </Flex>

      <Box as={"main"} px={"$4"}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default AuthLayout;
