import { IconButton } from "@hope-ui/solid";
import { Component } from "solid-js";
import { BsSun } from "solid-icons/bs";

const ThemeSwitcher: Component = () => {
  return (
    <IconButton
      aria-label={"Switch to light mode"}
      icon={<BsSun size={24} />}
      colorScheme="neutral"
      variant={"ghost"}
    />
  );
};

export default ThemeSwitcher;
