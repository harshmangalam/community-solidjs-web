import { Box, HStack, SimpleGrid, Tag } from "@hope-ui/solid";
import { Component, For } from "solid-js";

import ArticleCard from "@/components/Articles/ArticleCard";

const FeedsRoute: Component = () => {
  return (
    <Box>
      <SimpleGrid gap={"$8"}>
        <For each={[...Array(20)]}>{(article) => <ArticleCard />}</For>
      </SimpleGrid>
    </Box>
  );
};

export default FeedsRoute;
