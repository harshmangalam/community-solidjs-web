import { IconButton } from "@hope-ui/solid";
import { Component } from "solid-js";
import { BsBell } from "solid-icons/bs";

const Notifications: Component = () => {
  return (
    <IconButton
      aria-label="Notifications"
      icon={<BsBell size={24} />}
      variant="ghost"
      colorScheme={"neutral"}
    />
  );
};
export default Notifications;
