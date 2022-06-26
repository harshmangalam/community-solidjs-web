import BookmarkArticle from "@/components/Articles/BookmarkArticle";
import LikeArticle from "@/components/Articles/LikeArticle";
import { fetchArticleDetail } from "@/services/articleService";
import {
  Avatar,
  Box,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@hope-ui/solid";
import { useParams } from "solid-app-router";
import { createResource } from "solid-js";

export default function ArticleDetailRoute() {
  const params = useParams();
  const [data] = createResource(() => params.articleId, fetchArticleDetail);

  return (
    <Box p={"$4"}>
      <VStack spacing={"$4"} alignItems={"flex-start"}>
        <Image src={data()?.data.article.coverImage} w="$full" h={"$80"} />
        <HStack spacing={"$4"}>
          <Avatar name={data()?.data.article.author.name} />
          <VStack alignItems={"flex-start"}>
            <Heading fontSize={"$xl"}>
              {data()?.data.article.author.name}
            </Heading>
            <Text fontSize={"$md"}>
              {new Date(data()?.data.article.createdAt).toDateString()}
            </Text>
          </VStack>
        </HStack>
        <Heading fontSize={"$3xl"}>{data()?.data.article.title}</Heading>
        <Text fontSize={"$xl"}>{data()?.data.article.content}</Text>
        <HStack spacing={"$4"}>
          <LikeArticle />
          <BookmarkArticle />
        </HStack>
      </VStack>
    </Box>
  );
}
