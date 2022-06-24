import { Box } from "@hope-ui/solid";
import { Outlet } from "solid-app-router";
import type { Component } from "solid-js";

import MobileBottomSheet from "@/components/MobileBottomSheet";
import Navbar from "@/components/Header/Navbar"
import MenuSidebar from "@/components/Sidebar/MenuSidebar";
import RightSidebar from "@/components/Sidebar/RightSidebar";

const MainLayout: Component = () => {
  return (
    <>
      <Navbar />

      <MenuSidebar />
      <Box
        ml={{ "@initial": 0, "@lg": "$80" }}
        mr={{ "@initial": 0, "@xl": "$80" }}
        minH={"$screenH"}
        py={"$20"}
        borderWidth={{ "@initial": 0, "@md": "thin" }}
        borderColor="$neutral6"
        bg={"$neutral1"}
      >
        <Outlet />
      </Box>
      <RightSidebar />

      <Box display={{ "@initial": "block", "@sm": "none" }}>
        <MobileBottomSheet />
      </Box>
    </>
  );
};

export default MainLayout;
