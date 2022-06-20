import {
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  Tag,
  Text,
  useColorModeValue,
  VStack,
} from "@hope-ui/solid";
import { Component } from "solid-js";

const ListingCard: Component = () => {
  return (
    <Box
      bg={useColorModeValue("white", "$neutral3")()}
      shadow="$sm"
      rounded="$md"
      p={"$4"}
    >
      <Heading fontSize={"$xl"}>
        Beta testers wanted for software development automation project
      </Heading>
      <Flex flexWrap="wrap" gap="$2" mt={"$4"}>
        <Tag colorScheme="neutral" variant={"outline"}>
          Javascript
        </Tag>
        <Tag colorScheme="neutral" variant={"outline"}>
          React Js
        </Tag>
        <Tag colorScheme="neutral" variant={"outline"}>
          Material UI
        </Tag>
        <Tag colorScheme="neutral" variant={"outline"}>
          GraphQL
        </Tag>
        <Tag colorScheme="neutral" variant={"outline"}>
          GraphQL
        </Tag>
        <Tag colorScheme="neutral" variant={"outline"}>
          GraphQL
        </Tag>
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

export default ListingCard;
