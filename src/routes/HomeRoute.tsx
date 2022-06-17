import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Tag,
  Text,
  VStack,
} from "@hope-ui/solid";
import { Component, For } from "solid-js";
import { SiSparkpost } from "solid-icons/si";
import { Link } from "solid-app-router";

const HomeRoute: Component = () => {
  return (
    <Box>
      <SimpleGrid
        columns={{ "@initial": 1, "@md": 2 }}
        gap={"$4"}
        maxW="$containerXl"
        mx={"auto"}
        alignItems={{ "@initial": "center" }}
        px={"$4"}
        mt={"$8"}
        justifyContent={{ "@initial": "center" }}
      >
        <VStack
          spacing={"$8"}
          mt={"$8"}
          maxW="$containerSm"
          mx="auto"
          alignItems={"flex-start"}
        >
          <Heading lineHeight={1} fontSize={"$6xl"}>
            Where the community create and read articles
          </Heading>
          <Text fontSize={"$2xl"}>
            Feature rich blogging platform for communities havings articles,
            code nippets , podcast and much more for busy developers
          </Text>
          <Button
            variant={"solid"}
            colorScheme="info"
            size={"lg"}
            leftIcon={<SiSparkpost size={28} />}
            rounded="$full"
          >
            Lets Start
          </Button>
        </VStack>

        <Image src="https://hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1643230111752%2Fuv4w72h8g.png%3Fauto%3Dcompress&w=1920&q=75" />
      </SimpleGrid>

      <Box bg={"$blackAlpha12"} mt="$8">
        <SimpleGrid
          px={"$4"}
          columns={{ "@initial": 1, "@md": 6 }}
          maxW="$containerXl"
          mx={"auto"}
        >
          <VStack p="$4" rounded={"$lg"} spacing="$1">
            <Heading fontSize={"$3xl"}>86+</Heading>
            <Text>Bloggers</Text>
          </VStack>
          <VStack p="$4" rounded={"$lg"} spacing="$1">
            <Heading fontSize={"$3xl"}>30+</Heading>
            <Text>Communities</Text>
          </VStack>
          <VStack p="$4" rounded={"$lg"} spacing="$1">
            <Heading fontSize={"$3xl"}>3000+</Heading>
            <Text>Articles</Text>
          </VStack>
          <VStack p="$4" rounded={"$lg"} spacing="$1">
            <Heading fontSize={"$3xl"}>3000+</Heading>
            <Text>Articles</Text>
          </VStack>
          <VStack p="$4" rounded={"$lg"} spacing="$1">
            <Heading fontSize={"$3xl"}>3000+</Heading>
            <Text>Articles</Text>
          </VStack>
          <VStack p="$4" rounded={"$lg"} spacing="$1">
            <Heading fontSize={"$3xl"}>3000+</Heading>
            <Text>Articles</Text>
          </VStack>
        </SimpleGrid>
      </Box>

      <Box mt={"$8"} maxW="$containerXl" mx={"auto"}>
        <Heading fontSize={"$2xl"}>Tags</Heading>
        <SimpleGrid mt={"$4"} columns={4} gap="$4">
          <For each={[...Array(8)]}>
            {(tag) => (
              <Box
                as={Link}
                href={"/"}
                bg="$blackAlpha10"
                _hover={{ bg: "$blackAlpha11" }}
                rounded="$md"
                p={"$4"}
              >
                <HStack spacing={"$4"}>
                  <Avatar
                    name="Javascript"
                    fontSize={"$3xl"}
                    bg="$info7"
                  ></Avatar>
                  <VStack alignItems={"flex-start"}>
                    <Heading fontSize={"$xl"}>Javascript</Heading>
                    <Text>4000 Articles</Text>
                  </VStack>
                </HStack>
              </Box>
            )}
          </For>
        </SimpleGrid>
      </Box>

      <Box mt={"$8"} bg="$neutral3" py={"$8"}>
        <Box maxW="$containerXl" mx={"auto"}>
          <Heading fontSize={"$2xl"}>Listings</Heading>
          <SimpleGrid mt={"$4"} columns={3} gap="$4">
            <For each={[...Array(6)]}>
              {(listing) => (
                <Box
                  bg="$blackAlpha10"
                  _hover={{ bg: "$blackAlpha11" }}
                  rounded="$md"
                  p={"$4"}
                >
                  <Heading fontSize={"$xl"}>
                    Beta testers wanted for software development automation
                    project
                  </Heading>
                  <HStack spacing="$4" mt={"$2"}>
                    <Tag colorScheme="info">Javascript</Tag>
                    <Tag colorScheme="info">React Js</Tag>
                    <Tag colorScheme="info">Material UI</Tag>
                    <Tag colorScheme="info">GraphQL</Tag>
                  </HStack>

                  <Text mt={"$4"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis reiciendis quibusdam laboriosam quaerat distinctio
                    quod perspiciatis, dolores nostrum quos, quam neque cum,
                    labore explicabo inventore. Saepe molestias sed ipsam
                    numquam.
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
              )}
            </For>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeRoute;
