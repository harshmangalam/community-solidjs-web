import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import {
  createArticleErrorField,
  createArticleSchema,
} from "@/schema/articleSchema";
import { fetchTags } from "@/services";
import { createArticle } from "@/services/articleService";
import { handleSchemaError } from "@/utils/handleSchemaError";
import { handleServerError } from "@/utils/handleServerError";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  notificationService,
  Select,
  SelectContent,
  SelectIcon,
  SelectListbox,
  SelectOption,
  SelectOptionIndicator,
  SelectOptionText,
  SelectPlaceholder,
  SelectTrigger,
  SelectValue,
  SimpleGrid,
  Textarea,
} from "@hope-ui/solid";
import { AxiosError } from "axios";
import { useNavigate } from "solid-app-router";
import { FaSolidPlus } from "solid-icons/fa";
import { createResource, createSignal, For, Show } from "solid-js";
import { ValidationError } from "yup";

export default function WriteArticle() {
  const [isPreview, setIsPreview] = createSignal(false);
  const [tagsData] = createResource(fetchTags);

  const navigate = useNavigate();
  const [title, setTitle] = createSignal("");
  const [content, setContent] = createSignal("");
  const [tag, setTag] = createSignal("");
  const [tags, setTags] = createSignal([]);
  const [coverImage, setCoverImage] = createSignal("");
  const [errors, setErrors] = createSignal(createArticleErrorField);

  async function onSubmit(e: SubmitEvent) {
    e.preventDefault();
    try {
      const validationResult = await createArticleSchema.validate(
        {
          title: title(),
          content: content(),
          tags: tags(),
          coverImage: coverImage(),
        },
        { abortEarly: false, strict: true }
      );

      const res = await createArticle(validationResult);
      console.log(res);
      notificationService.show({
        title: "Article created successfully",
        duration: 3000,
        status: "success",
      });
      navigate("/");
    } catch (error) {
      if (error instanceof ValidationError) {
        let schemaErrors = handleSchemaError(error, createArticleErrorField);
        setErrors(schemaErrors);
      }
      if (error instanceof AxiosError) {
        handleServerError(error);
      }
    }
  }
  return (
    <Box>
      {/* header  */}
      <Box as="header" px={"$4"}>
        <HStack
          as={"nav"}
          justifyContent="space-between"
          maxW={"$containerXl"}
          mx="auto"
          h={"$16"}
        >
          <Logo />
          <HStack spacing={"$4"}>
            <Button
              variant={"solid"}
              colorScheme="info"
              onClick={() => setIsPreview((p) => !p)}
              size={{ "@initial": "sm", "@sm": "md" }}
            >
              <Show when={isPreview()} fallback="Edit">
                Preview
              </Show>
            </Button>
            <ThemeSwitcher />
          </HStack>
        </HStack>
      </Box>

      {/* main  */}

      <Box as="main" py={"$8"} maxW="$containerMd" mx="auto">
        <SimpleGrid as={"form"} gap={"$4"} p={"$4"} onSubmit={onSubmit}>
          <FormControl invalid={Boolean(errors().title)}>
            <FormLabel for="title">Article Title</FormLabel>
            <Input
              id="title"
              value={title()}
              onInput={(e) => setTitle(e.currentTarget.value)}
              type="text"
            />
            <Show when={Boolean(errors().title)}>
              <FormErrorMessage>{errors().title}</FormErrorMessage>
            </Show>
          </FormControl>
          <FormControl invalid={Boolean(errors().content)}>
            <FormLabel for="content">Article Content</FormLabel>
            <Textarea
              id="content"
              value={content()}
              onInput={(e) => setContent(e.currentTarget.value)}
              rows={10}
            />
            <Show when={Boolean(errors().content)}>
              <FormErrorMessage>{errors().content}</FormErrorMessage>
            </Show>
          </FormControl>

          <FormControl invalid={Boolean(errors().tags)}>
            <FormLabel for="tags">Select Tags</FormLabel>
            <Select multiple value={tags()} onChange={setTags}>
              <SelectTrigger>
                <SelectPlaceholder>Select Tags</SelectPlaceholder>
                <SelectValue />
                <SelectIcon />
              </SelectTrigger>
              <SelectContent>
                <SelectListbox>
                  <For each={tagsData()?.data.tags}>
                    {(item) => (
                      <SelectOption value={item.id}>
                        <SelectOptionText>{item.name}</SelectOptionText>
                        <SelectOptionIndicator />
                      </SelectOption>
                    )}
                  </For>
                </SelectListbox>
              </SelectContent>
            </Select>
            <Show when={Boolean(errors().tags)}>
              <FormErrorMessage>{errors().tags}</FormErrorMessage>
            </Show>
          </FormControl>

          <FormControl>
            <FormLabel for="coverImage">Add Cover Image</FormLabel>
            <Input
              id="coverImage"
              value={coverImage()}
              onChange={(e) => setCoverImage(e.currentTarget.value)}
            />
          </FormControl>

          <Button type="submit" fullWidth variant={"solid"} colorScheme="info">
            Create Article
          </Button>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
