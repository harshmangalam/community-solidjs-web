import GithubLogin from "@/components/auth/GithubLogin";
import GoogleLogin from "@/components/auth/GoogleLogin";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  SimpleGrid,
  Text,
} from "@hope-ui/solid";
import { Link } from "solid-app-router";
import { Component, Show } from "solid-js";

const AuthLoginRoute: Component = () => {
  return (
    <Box maxW={"$md"} mx={"auto"} mt={"$8"}>
      <Box
        borderColor="$neutral6"
        borderWidth={"thin"}
        rounded="$md"
        shadow="$md"
      >
        <Text textAlign={"center"} fontSize={"$3xl"} mt={"$4"}>
          Log In
        </Text>
        <SimpleGrid as={"form"} gap={"$4"} mt={"$8"} p={"$4"}>
          <FormControl invalid={false}>
            <FormLabel for="email">Email address</FormLabel>
            <Input id="email" type="email" />
            <Show when={false}>
              <FormErrorMessage>Email is required.</FormErrorMessage>
            </Show>
          </FormControl>
          <FormControl invalid={false}>
            <FormLabel for="password">Password</FormLabel>
            <Input id="password" type="password" />
            <Show when={false}>
              <FormErrorMessage>Password is required.</FormErrorMessage>
            </Show>
          </FormControl>

          <Button fullWidth variant={"solid"} colorScheme="info">
            Log In
          </Button>
        </SimpleGrid>

        <SimpleGrid
          columns={{ "@initial": 1, "@sm": 2 }}
          gap={"$4"}
          my={"$2"}
          p={"$4"}
        >
          <GithubLogin />
          <GoogleLogin />
        </SimpleGrid>
        <Divider />

        <HStack
          as={Link}
          href="/auth/signup"
          fontSize={"$lg"}
          bg={"$neutral3"}
          p={"$4"}
          spacing={"$3"}
          justifyContent="center"
        >
          <Text>New to community ?</Text>
          <Text _hover={{ textDecoration: "underline" }} color={"$accent10"}>
            Sign Up
          </Text>
        </HStack>
      </Box>

      <SimpleGrid mt={"$4"} px={"$4"} justifyContent="center">
        <Box
          as={Link}
          _hover={{ textDecoration: "underline" }}
          href="/auth/forgot-password"
        >
          Forgot your password
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default AuthLoginRoute;
