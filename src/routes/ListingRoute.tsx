import ListingCard from "@/components/Listing/ListingCard";
import {
  Box,
  Button,
  Divider,
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
    <Box>
      <HStack justifyContent={"space-between"} px="$4" spacing={"$4"}>
        <Heading flexGrow={1} fontSize={"$2xl"}>
          Listings
        </Heading>
        <HStack spacing={"$2"}>
          <Button colorScheme={"info"}>Create</Button>
          <Button colorScheme={"accent"}>Manage</Button>
        </HStack>
      </HStack>

      <Divider mt={"$4"} mb="$2" />

      <HStack
        py={"$2"}
        overflowX={"auto"}
        overflowY="hidden"
        spacing={"$4"}
        px={"$4"}
      >
        <For each={[...Array(8)]}>
          {(listing) => (
            <Tag
              style={{ "white-space": "nowrap" }}
              as={Link}
              href="/listings"
              size={"lg"}
              colorScheme="neutral"
            >
              Offering Mentorship
            </Tag>
          )}
        </For>
      </HStack>
      <Divider my={"$2"} />

      <Box mt={"$8"} px="$4">
        <SimpleGrid columns={{ "@initial": 1, "@md": 2 }} gap={"$4"} mt="$4">
          <For each={[...Array(8)]}>{(listing) => <ListingCard />}</For>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ListingRoute;
