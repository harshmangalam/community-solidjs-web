import { Box, Heading, VStack } from "@hope-ui/solid";
import { Component, For } from "solid-js";
import TagCard from "@/components/Tag/TagCard";
import UserCard from "@/components/User/UserCard";

const RightSidebar: Component = () => {
  return (
    <Box
      pos={"fixed"}
      top={"$16"}
      right={0}
      bottom={0}
      w={"$80"}
      px="$2"
      overflowY={"auto"}
      py="$4"
      display={{ "@initial": "none", "@xl": "block" }}
    >
      <Box>
        <Heading fontSize={"$lg"}>Bloggers</Heading>
        <VStack mt={"$4"}>
          <For each={[...Array(5)]}>{(user) => <UserCard />}</For>
        </VStack>
      </Box>
      <Box mt={"$4"}>
        <Heading fontSize={"$lg"}>Tags</Heading>
        <VStack mt={"$4"} spacing={"$2"}>
          <For each={[...Array(5)]}>{(tag) => <TagCard />}</For>
        </VStack>
      </Box>
    </Box>
  );
};
export default RightSidebar;
