import {
  Avatar,
  Heading,
  HStack,
  IconButton,
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
  notificationService,
} from "@hope-ui/solid";
import { IoLogOutOutline, IoSettingsOutline } from "solid-icons/io";
import { Component } from "solid-js";
import { AiOutlineUser } from "solid-icons/ai";
import { RiDocumentDraftLine } from "solid-icons/ri";
import { BsBookmarkHeart } from "solid-icons/bs";
import { logout } from "@/services";
import { AxiosError } from "axios";
import { useAuthDispatch } from "@/context/authProvider";
const ProfileMenu: Component = () => {
  const authDispatch = useAuthDispatch()
  const handleLogout = async () => {
    try {
      await logout();
      notificationService.show({
        title: "You have logout successfully",
        duration: 3000,
        closable: true,
        status: "success",
      });

      authDispatch.logout()
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        notificationService.show({
          title: error.name,
          description: error.message,
          duration: 3000,
          closable: true,
          status: "danger",
        });
      }
    }
  };
  return (
    <Menu>
      <MenuTrigger
        as={IconButton}
        icon={<AiOutlineUser size={28} />}
        aria-label="Profile"
        variant="ghost"
        colorScheme={"neutral"}
      />

      <MenuContent>
        <MenuItem>
          <HStack spacing={"$4"}>
            <Avatar bg={"$info10"} />
            <Heading>Harsh Mangalam</Heading>
          </HStack>
        </MenuItem>
        <MenuItem icon={<RiDocumentDraftLine size={24} />}>Dashboard</MenuItem>
        <MenuItem icon={<RiDocumentDraftLine size={24} />}>Drafts</MenuItem>
        <MenuItem icon={<BsBookmarkHeart size={24} />}>Bookmarks</MenuItem>
        <MenuItem icon={<IoSettingsOutline size={24} />}>Settings</MenuItem>
        <MenuItem
          onSelect={handleLogout}
          colorScheme={"danger"}
          icon={<IoLogOutOutline size={24} />}
        >
          Logout
        </MenuItem>
      </MenuContent>
    </Menu>
  );
};

export default ProfileMenu;
