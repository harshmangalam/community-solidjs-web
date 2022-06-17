import {
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  Tag,
  Text,
  VStack,
} from "@hope-ui/solid";
import { Component } from "solid-js";

const ListingCard: Component = () => {
  return (
    <Box
      bg="$blackAlpha10"
      _hover={{ bg: "$blackAlpha11" }}
      rounded="$md"
      p={"$4"}
    >
      <Heading fontSize={"$xl"}>
        Beta testers wanted for software development automation project
      </Heading>
      <Flex flexWrap="wrap" gap="$2" mt={"$4"}>
        <Tag colorScheme="info">Javascript</Tag>
        <Tag colorScheme="info">React Js</Tag>
        <Tag colorScheme="info">Material UI</Tag>
        <Tag colorScheme="info">GraphQL</Tag>
        <Tag colorScheme="info">GraphQL</Tag>
        <Tag colorScheme="info">GraphQL</Tag>
      </Flex>

      <Text mt={"$4"} textAlign="justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
        reiciendis quibusdam laboriosam quaerat distinctio quod perspiciatis,
        dolores nostrum quos, quam neque cum, labore explicabo inventore. Saepe
        molestias sed ipsam numquam.
      </Text>
      <Flex justifyContent={"space-between"} mt={"$4"} alignItems="center">
        <HStack spacing={"$4"}>
          <Avatar
            size={"sm"}
            name="Hector Rhodes"
            src="https://bit.ly/3pWHo72"
          />
          <VStack alignItems={"flex-start"}>
            <Heading fontSize={"$md"}>Javascript</Heading>
            <Text fontSize={"$sm"}>Jobs</Text>
          </VStack>
        </HStack>

        <Text fontSize={"$sm"}>3 days ago</Text>
      </Flex>
    </Box>
  );
};


export default ListingCard