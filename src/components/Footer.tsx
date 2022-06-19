import { socialLinks } from "@/metaData/links";
import { Box, HStack, Icon, IconButton, Text, VStack } from "@hope-ui/solid";
import { Component, For } from "solid-js";

const Footer: Component = () => {
  return (
    <VStack spacing={"$2"}>
      <Text textAlign={"center"} as={"span"} fontWeight="$semibold">
        Community - Hashnode and Linode Hackathon project
      </Text>

      <HStack spacing={"$4"}>
        <For each={socialLinks}>
          {(link) => (
            <IconButton
              aria-label={link.name}
              icon={<Icon as={link.icon} w={"$6"} h={"$6"} />}
              variant="subtle"
              colorScheme={"neutral"}
              rounded="$full"
            />
          )}
        </For>
      </HStack>
    </VStack>
  );
};
export default Footer;
