import { IconButton, useColorMode } from "@hope-ui/solid";
import { Component } from "solid-js";
import { BsMoon, BsSun } from "solid-icons/bs";

const ThemeSwitcher: Component = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      onClick={toggleColorMode}
      aria-label={"Switch to light mode"}
      icon={colorMode() === "dark" ? <BsSun size={24} /> : <BsMoon size={24} />}
      colorScheme="neutral"
      variant={"ghost"}
    />
  );
};

export default ThemeSwitcher;
