import TagCard from "@/components/Tag/TagCard";
import { fetchTags } from "@/services";

import { Box, Divider, Heading, HStack, SimpleGrid } from "@hope-ui/solid";

import { Component, createResource, For } from "solid-js";

const TagsRoute: Component = () => {
  async function tagsFetcher(source, { value, refetching }) {
    try {
      console.log(source, { value, refetching });
      const tags = await fetchTags();
      return tags;
    } catch (error) {
      console.log(error);
    }
  }
  const [data, { refetch }] = createResource(tagsFetcher);
  return (
    <Box>
     
      <HStack justifyContent={"space-between"} px="$4" spacing={"$4"}>
        <Heading flexGrow={1} fontSize={"$2xl"}>
          Tags
        </Heading>
      </HStack>
      <Divider py={"$2"} />

      <Box mt={"$8"} px="$4">
        <SimpleGrid gap={"$4"} columns={{ "@initial": 1, "@sm": 2, "@md": 2 }}>
          <For each={data()?.data.tags}>{(tag) => <TagCard {...tag} />}</For>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default TagsRoute;
