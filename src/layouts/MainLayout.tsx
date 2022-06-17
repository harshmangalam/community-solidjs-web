import { Box } from "@hope-ui/solid";
import { Outlet } from "solid-app-router";
import type { Component } from "solid-js";

import MobileBottomSheet from "@/components/MobileBottomSheet";
import Navbar from "@/components/Navbar";

const MainLayout: Component = () => {
  return (
    <>
      {/* navbar  */}
      <Navbar />
      {/* main  */}
      <Box as="main" py={"$12"}>
        <Outlet />
      </Box>

      {/* bottom sheet  */}
      <Box display={{ "@initial": "block", "@md": "none" }}>
        <MobileBottomSheet />
      </Box>
    </>
  );
};

export default MainLayout;
