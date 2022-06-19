import {
  Avatar,
  Button,
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

const UserCard: Component = () => {
  return (
    <Flex
      justifyContent="space-between"
      py={"$2"}
      px={"$2"}
      _hover={{ bg: "$neutral6" }}
      w="$full"
      rounded={"$lg"}
    >
      <Flex gap={"$4"}>
        <Image
          src="https://hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1607082785538%2FEryuLRriM.png%3Fw%3D200%26h%3D200%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75"
          w={"$10"}
          h={"$10"}
          rounded="$lg"
        />
        <VStack alignItems={"flex-start"}>
          <Heading>Harsh Mangalam</Heading>
          <Text fontSize={"$sm"}>
           Joined 5 years ago
          </Text>
        </VStack>
      </Flex>

      <Button variant={"solid"} colorScheme="info" size={"sm"}>
        Follow
      </Button>
    </Flex>
  );
};

export default UserCard;
