import { Box, Flex, Heading, Text, VStack } from "@hope-ui/solid";
import { Component, For } from "solid-js";

const HomeRoute: Component = () => {
  return (
    <Box mt={"$8"}>
      <Flex
        maxW="$containerXl"
        mx={"auto"}
        alignItems={{ "@initial": "center" }}
        px={"$4"}
        justifyContent={"center"}
      >
        <VStack spacing={"$8"} maxW="$containerMd" mx="auto">
          <Heading
            fontSize={{ "@initial": "$4xl", "@md": "$6xl" }}
            textAlign="center"
          >
            <Box as={"span"} color="$info10">
              Hashnode
            </Box>{" "}
            <Box as={"span"} color="$warning10">
              {" "}
              &amp; Linode{" "}
            </Box>
            Hackathon
          </Heading>
          <Text textAlign={"center"} fontSize={"$2xl"}>
            An open source blogging platform build for developers and grow
            between developers communities
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default HomeRoute;
