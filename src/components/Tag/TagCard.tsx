import {
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Text,
  VStack,
} from "@hope-ui/solid";
import { Link } from "solid-app-router";

import { FaSolidPlus } from "solid-icons/fa";
import { Component } from "solid-js";

const TagCard: Component = (props) => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent="space-between"
      py={"$2"}
      px={"$2"}
      _hover={{ bg: "$neutral6" }}
      w="$full"
      rounded={"$lg"}
      bg={"$neutral4"}
      as={Link}
      href={`/tags/${props.id}`}
    >
      <HStack spacing={"$4"}>
        <Image src={props.coverImage} w={"$10"} h={"$10"} rounded="$lg" />
        <VStack alignItems={"flex-start"}>
          <Heading>{props.name}</Heading>
          <Text fontSize={"$sm"}>{props._count.articles} articles</Text>
        </VStack>
      </HStack>
    </Flex>
  );
};

export default TagCard;
