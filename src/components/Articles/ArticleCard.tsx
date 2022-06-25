import {
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Tag,
  Text,
  VStack,
} from "@hope-ui/solid";
import { Component, For } from "solid-js";
import { BsBookmark } from "solid-icons/bs";
import { BsHeart } from "solid-icons/bs";

const ArticleCard: Component = (props) => {
  return (
    <Box borderBottomWidth={"thin"} p={"$4"} borderColor="$neutral6">
      <Flex justifyContent={"space-between"} alignItems="center">
        <HStack spacing={"$4"}>
          <Avatar
            src="https://hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1652104964841%2FZCo82-HJ6.jpeg%3Fw%3D150%26h%3D150%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75"
            size={"md"}
          ></Avatar>
          <VStack alignItems={"flex-start"}>
            <HStack spacing={"$2"}>
              <Heading>{props.author.name}</Heading>
              <Box as="span">&bull;</Box>
              <Text>{new Date(props.createdAt).toDateString()}</Text>
            </HStack>
            <HStack spacing={"$2"}>
              <Text>{props.readTime}</Text>
            </HStack>
          </VStack>
        </HStack>
      </Flex>

      <Grid templateColumns="repeat(4, 1fr)" gap="$4" mt={"$4"}>
        <GridItem colSpan={{ "@initial": 4, "@md": 3 }}>
          <VStack alignItems={"flex-start"} spacing="$2">
            <Heading fontSize={"$2xl"}>{props.title}</Heading>
            <Text noOfLines={4} textAlign={"justify"}>
              {props.content}
            </Text>

            <Flex flexWrap="wrap" gap="$2" mt={"$4"}>
              <For each={props.tags}>
                {(tag) => <Tag colorScheme="info">{tag.name}</Tag>}
              </For>
            </Flex>
          </VStack>
        </GridItem>

        <GridItem colSpan={{ "@initial": 4, "@md": 1 }}>
          <Image
            src={props.coverImage}
            alt={props.title}
            objectFit="cover"
            w={"$full"}
            h={"$40"}
          />
        </GridItem>
      </Grid>

      <HStack mt={"$4"} spacing={"$4"}>
        <Button
          aria-label="Bookmark"
          leftIcon={<BsBookmark size={20} />}
          variant="ghost"
          colorScheme={"neutral"}
        >
          45
        </Button>
        <Button
          aria-label="Heart"
          leftIcon={<BsHeart size={20} />}
          variant="ghost"
          colorScheme={"neutral"}
        >
          566
        </Button>
      </HStack>
    </Box>
  );
};

export default ArticleCard;
