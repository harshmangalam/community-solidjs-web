import TagCard from "@/components/Tag/TagCard";
import { Box, SimpleGrid } from "@hope-ui/solid";
import { Component, For } from "solid-js";

const TagsHomeRoute: Component = () => {
  return (
    <Box>
      <SimpleGrid gap={"$4"} columns={{ "@initial": 1, "@sm": 2, "@md": 2,  }}>
        <For each={[...Array(10)]}>{(tag) => <TagCard />}</For>
      </SimpleGrid>
    </Box>
  );
};

export default TagsHomeRoute;
