import { menuLinks } from "@/metaData/links";
import { Box, Flex, HStack, Icon, Text, VStack } from "@hope-ui/solid";
import { Link } from "solid-app-router";
import { Component, For } from "solid-js";
import Footer from "./Footer";

const MenuSidebar: Component = () => {
  return (
    <Box
      pos={"fixed"}
      top={"$16"}
      left={0}
      bottom={0}
      w={"$80"}
      px={"$2"}
      py="$4"
      display={{ "@initial": "none", "@lg": "block" }}
    >
      <VStack alignItems={"flex-start"} justifyContent="space-between" h={"$full"}>
        <VStack spacing={"$2"} alignItems={"flex-start"} w="$full">
          <For each={menuLinks}>
            {(link) => (
              <HStack
                as={Link}
                href={`/${link.href}`}
                spacing={"$4"}
                py="$2"
                px={"$2"}
                _hover={{ bg: "$neutral4" }}
                w="$full"
                rounded={"$md"}
              >
                <Icon as={link.icon} w={"$6"} h={"$6"} />
                <Text fontSize="$lg">{link.name}</Text>
              </HStack>
            )}
          </For>
        </VStack>
        <Footer />
      </VStack>
    </Box>
  );
};

export default MenuSidebar;
