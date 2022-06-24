import { useAuthState } from "@/context/authProvider";
import { authUserLinks, menuLinks, unauthUserLinks } from "@/metaData/links";
import { Box, VStack } from "@hope-ui/solid";
import { Component, For, Match, Switch } from "solid-js";
import LinkItem from "@/components/Sidebar/LinkItem";

const LinksBody: Component = () => {
  const authState = useAuthState();
  return (
    <Box w={"$full"}>
      <VStack spacing={"$2"} alignItems={"flex-start"}>
        <For each={menuLinks}>{(link) => <LinkItem {...link} />}</For>
      </VStack>

      <Switch
        fallback={
          <VStack mt={"$2"} spacing={"$2"} alignItems={"flex-start"}>
            <For each={unauthUserLinks}>{(link) => <LinkItem {...link} />}</For>
          </VStack>
        }
      >
        <Match when={authState.isLoading}>Loading...</Match>
        <Match when={authState.isAuthenticated}>
          <VStack mt={"$2"} spacing={"$2"} alignItems={"flex-start"}>
            <For each={authUserLinks}>{(link) => <LinkItem {...link} />}</For>
          </VStack>
        </Match>
      </Switch>
    </Box>
  );
};

export default LinksBody;
