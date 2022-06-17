import ArticleCard from "@/components/Articles/ArticleCard";
import {
  Box,
  Heading,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  VStack,
} from "@hope-ui/solid";

import { Component, For } from "solid-js";

const ArticleRoute: Component = () => {
  return (
    <Box maxW={"$containerXl"} mx="auto" px={"$4"}>
      <Heading fontSize={"$3xl"}>Articles</Heading>

      <Tabs variant={"pills"} mt={"$4"}>
        <TabList>
          <Tab>Relevant</Tab>
          <Tab>Latest</Tab>
          <Tab>Top</Tab>
        </TabList>
        <TabPanel mt={"$8"}>
          <VStack spacing={"$8"}>
            <For each={[...Array(1)]}>{(article) => <ArticleCard />}</For>
          </VStack>
        </TabPanel>
        <TabPanel mt={"$8"}>
          <VStack spacing={"$8"}>
            <For each={[...Array(2)]}>{(article) => <ArticleCard />}</For>
          </VStack>
        </TabPanel>
        <TabPanel mt={"$8"}>
          <VStack spacing={"$8"}>
            <For each={[...Array(3)]}>{(article) => <ArticleCard />}</For>
          </VStack>
        </TabPanel>
      </Tabs>
    </Box>
  );
};

export default ArticleRoute;
