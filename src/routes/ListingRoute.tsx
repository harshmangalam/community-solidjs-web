import ListingCard from "@/components/Listing/ListingCard";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Tag,
} from "@hope-ui/solid";
import { Link } from "solid-app-router";
import { Component, For } from "solid-js";

const ListingRoute: Component = () => {
  return (
    <Box maxW={"$containerXl"} mx="auto" px={"$4"}>
      <Flex justifyContent={"space-between"}>
        <Heading fontSize={"$3xl"}>Listings</Heading>
        <HStack spacing={"$2"}>
          <Button colorScheme={"info"}>Create</Button>
          <Button colorScheme={"accent"}>Manage</Button>
        </HStack>
      </Flex>

      <HStack
        overflowX={"auto"}
        overflowY="hidden"
        spacing={"$4"}
        mt={"$4"}
        py="$4"
      >
        <For each={[...Array(10)]}>
          {(listing) => (
            <Tag
              style={{ "white-space": "nowrap" }}
              as={Link}
              href="/listings"
              size={"lg"}
              colorScheme="primary"
            >
              Offering Mentorship
            </Tag>
          )}
        </For>
      </HStack>

      <SimpleGrid
        columns={{ "@initial": 1, "@md": 2, "@lg": 3 }}
        gap={"$4"}
        mt="$4"
      >
        <For each={[...Array(8)]}>{(listing) => <ListingCard />}</For>
      </SimpleGrid>
    </Box>
  );
};

export default ListingRoute;
