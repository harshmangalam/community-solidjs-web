import TagCard from "@/components/Tag/TagCard";
import TagFilterMenu from "@/components/Tag/TagFilterMenu";
import { Box, Divider, Heading, HStack, SimpleGrid } from "@hope-ui/solid";

import { Component, For } from "solid-js";

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
        <SimpleGrid gap={"$4"} columns={{ "@initial": 1, "@sm": 2, "@md": 2 }}>
          <For each={[...Array(10)]}>{(tag) => <TagCard />}</For>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default TagsRoute;
