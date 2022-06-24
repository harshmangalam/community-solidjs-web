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
    >
      <HStack spacing={"$4"}>
        <Image src={props.coverImage} w={"$10"} h={"$10"} rounded="$lg" />
        <VStack alignItems={"flex-start"}>
          <Heading>{props.name}</Heading>
          <Text fontSize={"$sm"}>40557 articles</Text>
        </VStack>
      </HStack>

      <IconButton
        variant={"solid"}
        colorScheme="info"
        aria-label="Follow Tag"
        icon={<Icon as={FaSolidPlus} />}
        size="sm"
        rounded={"$full"}
      />
    </Flex>
  );
};

export default TagCard;
