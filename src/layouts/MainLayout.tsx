import { Box } from "@hope-ui/solid";
import { Outlet } from "solid-app-router";
import type { Component } from "solid-js";

import MobileBottomSheet from "@/components/MobileBottomSheet";
import Navbar from "@/components/Navbar";
import MenuSidebar from "@/components/MenuSidebar";
import RightSidebar from "@/components/RightSidebar";

const MainLayout: Component = () => {
  return (
    <>
      <Navbar />

      <MenuSidebar />
      <Box ml={"$80"} mr={"$80"} minH={"$screenH"} py={"$20"} px={"$4"}>
        <Outlet />
      </Box>
      <RightSidebar />

      <Box display={{ "@initial": "block", "@md": "none" }}>
        <MobileBottomSheet />
      </Box>
    </>
  );
};

export default MainLayout;
