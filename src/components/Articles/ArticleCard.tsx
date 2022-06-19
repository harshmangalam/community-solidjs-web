import {
  AspectRatio,
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  Image,
  Tag,
  Text,
  VStack,
} from "@hope-ui/solid";
import { Component, For } from "solid-js";
import { BsBookmarkHeart } from "solid-icons/bs";
import { BsHeart } from "solid-icons/bs";
import { FaCommentAlt } from "solid-icons/fa";
const ArticleCard: Component = () => {
  return (
    <Box borderWidth={"thin"} rounded="$md" p={"$4"} borderColor="$neutral10">
      <Flex justifyContent={"space-between"} alignItems="center">
        <HStack spacing={"$4"}>
          <Avatar
            src="https://hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1652104964841%2FZCo82-HJ6.jpeg%3Fw%3D150%26h%3D150%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75"
            size={"md"}
          ></Avatar>
          <VStack alignItems={"flex-start"}>
            <HStack spacing={"$2"}>
              <Heading>Harsh Mangalam</Heading>
              <Box as="span">&bull;</Box>
              <Text>Jun 7, 2022</Text>
            </HStack>
            <HStack spacing={"$2"}>
              <Text>8 mins read</Text>
            </HStack>
          </VStack>
        </HStack>
      </Flex>

      <Grid templateColumns="repeat(4, 1fr)" gap="$4" mt={"$4"}>
        <GridItem colSpan={{ "@initial": 4, "@md": 3 }}>
          <VStack alignItems={"flex-start"} spacing="$2">
            <Heading fontSize={"$2xl"}>
              PostgreSQL Fuzzy Text Search: Not so fuzzy to fuzziest
            </Heading>
            <Text textAlign={"justify"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sequi
              ducimus eum molestiae. Possimus minus tenetur veniam quod
              distinctio eaque, aut rem ipsa vero, ut vitae quibusdam quis
              cupiditate modi, beatae fugiat excepturi optio dicta explicabo
              quam sequi repellendus aperiam dolore maxime. Vitae quae, iure
              sunt suscipit quia tempora, sit nobis debitis illum nesciunt ex
              non. Dicta dolor magni mollitia atque animi doloremque totam ullam
              a possimus iusto. Obcaecati, distinctio.
            </Text>

            <Flex flexWrap="wrap" gap="$2" mt={"$4"}>
              <For each={[...Array(4)]}>
                {(tag) => <Tag colorScheme="info">Javascript</Tag>}
              </For>
            </Flex>
          </VStack>
        </GridItem>

        <GridItem colSpan={{ "@initial": 4, "@md": 1 }}>
          <Image
            src="https://bit.ly/3pq0AcS"
            alt="Monkey D. Luffy"
            objectFit="cover"
            w={"$full"}
            h={"$40"}
          />
        </GridItem>
      </Grid>

      <HStack mt={"$4"} spacing={"$4"}>
        <Button
          aria-label="Bookmark"
          leftIcon={<BsBookmarkHeart size={20} />}
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
        <Button
          aria-label="Comment"
          leftIcon={<FaCommentAlt size={20} />}
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
