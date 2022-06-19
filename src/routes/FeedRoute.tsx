import {
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
  Tag,
  Text,
  VStack,
} from "@hope-ui/solid";
import { Component, For } from "solid-js";
import { SiSparkpost } from "solid-icons/si";
import { Link } from "solid-app-router";
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
