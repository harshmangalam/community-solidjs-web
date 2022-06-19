import { Box, VStack } from "@hope-ui/solid";
import { Component, For } from "solid-js";
import TagCard from "@/components/Tag/TagCard";

const RightSidebar: Component = () => {
  return (
    <Box
      pos={"fixed"}
      top={"$16"}
      right={0}
      bottom={0}
      w={"$80"}
      px="$2"
      overflowY={"auto"}
      py="$4"
    >
      <VStack>
        <For each={[...Array(13)]}>{(tag) => <TagCard />}</For>
      </VStack>
    </Box>
  );
};
export default RightSidebar;
