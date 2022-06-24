import { Box, VStack } from "@hope-ui/solid";
import { Component } from "solid-js";
import Footer from "@/components/Footer";
import LinksBody from "@/components/Sidebar/LinksBody";

const MenuSidebar: Component = () => {
  return (
    <Box
      pos={"fixed"}
      top={"$16"}
      left={0}
      bottom={0}
      w={"$80"}
      px={"$2"}
      py="$4"
      display={{ "@initial": "none", "@lg": "block" }}
    >
      <VStack
        alignItems={"flex-start"}
        justifyContent="space-between"
        h={"$full"}
      >
        <LinksBody />
        <Footer />
      </VStack>
    </Box>
  );
};

export default MenuSidebar;
