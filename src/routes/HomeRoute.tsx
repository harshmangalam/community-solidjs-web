import { Box, Divider, Heading, HStack, SimpleGrid } from "@hope-ui/solid";
import { Component, createResource, For } from "solid-js";

import ArticleCard from "@/components/Articles/ArticleCard";
import { fetchArticles } from "@/services/articleService";

const HomeRoute: Component = () => {
  async function articlesFetcher(source, { value, refetching }) {
    try {
      const articles = await fetchArticles();
      return articles;
    } catch (error) {
      console.log(error);
    }
  }
  const [data, { refetch }] = createResource(articlesFetcher);
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
          <For each={data()?.data.articles}>
            {(article) => <ArticleCard {...article} />}
          </For>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default HomeRoute;
