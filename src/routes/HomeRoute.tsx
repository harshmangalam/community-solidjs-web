import { Box, Divider, Heading, HStack, SimpleGrid, Tag } from "@hope-ui/solid";
import { Component, For } from "solid-js";

import ArticleCard from "@/components/Articles/ArticleCard";

const HomeRoute: Component = () => {
  return (
    <Box>
      <HStack justifyContent={"space-between"} px="$4" spacing={"$4"}>
        <Heading flexGrow={1} fontSize={"$2xl"}>
          Home
        </Heading>
      </HStack>
      <Divider py={"$2"} />

      <Box mt={"$8"}>
        <SimpleGrid gap={"$8"}>
          <For each={[...Array(20)]}>{(article) => <ArticleCard />}</For>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default HomeRoute;
