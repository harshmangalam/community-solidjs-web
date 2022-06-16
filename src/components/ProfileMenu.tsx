import { Avatar, Button, IconButton } from "@hope-ui/solid";
import { Component } from "solid-js";
import { AiOutlineUser } from 'solid-icons/ai'
const ProfileMenu: Component = () => {
  return (
    <IconButton
      icon={<AiOutlineUser size={28} />}
      aria-label="Profile"
      variant="ghost"
      colorScheme={"neutral"}
    >
      {/* <Avatar
        rounded={"$md"}
        size="sm"
        name="User name"
        src="https://bit.ly/3w2rgom"
      /> */}
    </IconButton>
  );
};

export default ProfileMenu;
