import ArticleCard from "@/components/Articles/ArticleCard";
import FollowTag from "@/components/Tag/FollowTag";
import { useAuthState } from "@/context/authProvider";
import { fetchTagDetail } from "@/services";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  VStack,
} from "@hope-ui/solid";
import { useParams } from "solid-app-router";
import { FaSolidUsers } from "solid-icons/fa";
import {
  createEffect,
  createResource,
  createSignal,
  For,
  Show,
} from "solid-js";

export default function TagDetailRoute() {
  const [isFollowing, setIsFollowing] = createSignal(false);
  const params = useParams();
  const authState = useAuthState();
  const [data, { refetch }] = createResource(
    () => params.tagId,
    fetchTagDetail
  );

  createEffect(() => {
    const index = authState.currentUser.followingTags.findIndex(
      (t) => t.id === params.tagId
    );

    if (index >= 0) {
      setIsFollowing(true);
    } else {
      setIsFollowing(false);
    }
  });

  return (
    <Box>
      <Flex gap={"$4"} justifyContent={"space-between"} px={"$4"}>
        <Image w={"$16"} h={"$16"} src={data()?.data.tag.coverImage} />

        <VStack alignItems={"flex-start"} flexGrow={1} spacing={"$2"}>
          <Stack
            direction={{ "@initial": "column", "@sm": "row" }}
            w={{ "@initial": "initial", "@sm": "$full" }}
            justifyContent={"space-between"}
          >
            <Heading fontSize={"$3xl"}>{data()?.data.tag.name}</Heading>
            <Show when={authState.isAuthenticated}>
              <FollowTag
                refetchTagDetail={refetch}
                tagId={data()?.data.tag.id}
                isFollowing={isFollowing()}
              />
            </Show>
          </Stack>
          <Text textAlign={"justify"}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A maxime
            sunt quo, minima omnis, quas eveniet laboriosam nihil autem
            necessitatibus dignissimos aperiam dolor distinctio. Doloremque quo
            a at voluptatum delectus blanditiis aliquid fugit praesentium
            consequatur laboriosam corrupti dolorum odit sed, quis ipsum placeat
            porro quisquam repudiandae quia itaque rem quod!
          </Text>
        </VStack>
      </Flex>

      <Stack
        direction={{ "@initial": "column", "@sm": "row" }}
        mt={"$8"}
        justifyContent={"center"}
        spacing={"$4"}
        px={"$4"}
      >
        <Tag colorScheme={"info"} size="lg">
          <TagLeftIcon as={FaSolidUsers} />
          <TagLabel>{data()?.data.tag._count?.followers} Followers</TagLabel>
        </Tag>
        <Tag colorScheme={"accent"} size="lg">
          <TagLeftIcon as={FaSolidUsers} />
          <TagLabel> {data()?.data.tag._count?.articles} Articles</TagLabel>
        </Tag>
      </Stack>

      <Divider my={"$4"} />

      <SimpleGrid gap={"$4"} mt={"$8"}>
        <For each={data()?.data.tag.articles}>
          {(article) => <ArticleCard {...article} />}
        </For>
      </SimpleGrid>
    </Box>
  );
}
