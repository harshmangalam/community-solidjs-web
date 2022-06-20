import TagFilterMenu from "@/components/Tag/TagFilterMenu";
import { Box, Button, Divider, Heading, HStack } from "@hope-ui/solid";
import { Outlet } from "solid-app-router";
import { Component } from "solid-js";

const TagsRoute: Component = () => {
  return (
    <Box>
      <HStack justifyContent={"space-between"} px="$4" spacing={"$4"}>
        <Heading flexGrow={1} fontSize={"$2xl"}>
          Tags
        </Heading>

        <TagFilterMenu />
      </HStack>
      <Divider py={"$2"} />

      <Box mt={"$8"} px="$4">
        <Outlet />
      </Box>
    </Box>
  );
};

export default TagsRoute;
