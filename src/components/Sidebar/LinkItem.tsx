import { HStack, Icon, Text } from "@hope-ui/solid";
import { Link } from "solid-app-router";
import { Component } from "solid-js";

const LinkItem: Component = (props) => {
  return (
    <HStack
      as={Link}
      href={`/${props.href}`}
      spacing={"$4"}
      py="$2"
      px={"$2"}
      _hover={{ bg: "$neutral6" }}
      w="$full"
      rounded={"$md"}
    >
      <Icon as={props.icon} w={"$6"} h={"$6"} />
      <Text fontSize="$lg">{props.name}</Text>
    </HStack>
  );
};

export default LinkItem;
