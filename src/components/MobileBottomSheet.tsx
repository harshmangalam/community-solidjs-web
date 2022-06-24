import { Component } from "solid-js";
import { BsBell } from "solid-icons/bs";
import { BsBookmarkHeart } from "solid-icons/bs";
import { CgSearch } from "solid-icons/cg";
import { VscHome } from "solid-icons/vsc";
import { Flex, IconButton } from "@hope-ui/solid";
import ThemeSwitcher from "./ThemeSwitcher";
import Notifications from "./Header/Notifications";
import ProfileMenu from "./Header/ProfileMenu";

const MobileBottomSheet: Component = () => {
  return (
    <Flex
      pos={"fixed"}
      bottom={0}
      left={0}
      right={0}
      px={"$4"}
      alignItems="center"
      justifyContent={"space-between"}
      bg="$neutral4"
      h={"$16"}
    >
      <ThemeSwitcher />
      <Notifications />
      <ProfileMenu />
    </Flex>
  );
};

export default MobileBottomSheet;
