import GithubLogin from "@/components/auth/GithubLogin";
import GoogleLogin from "@/components/auth/GoogleLogin";
import { login } from "@/services";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  notificationService,
  SimpleGrid,
  Text,
} from "@hope-ui/solid";
import { Link, useNavigate } from "solid-app-router";
import { Component, createSignal, Show } from "solid-js";
import { loginErrorFields, loginSchema } from "@/schema";
import { handleSchemaError } from "@/utils/handleSchemaError";
import { handleServerError } from "@/utils/handleServerError";
import { ValidationError } from "yup";
import { AxiosError } from "axios";
import { useAuthDispatch } from "@/context/authProvider";

const AuthLoginRoute: Component = () => {
  const navigate = useNavigate();
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [errors, setErrors] = createSignal(loginErrorFields);

  const authDispatch = useAuthDispatch();

  async function onSubmit(e: SubmitEvent) {
    e.preventDefault();
    setErrors(loginErrorFields);
    try {
      const validationResult = await loginSchema.validate(
        {
          email: email(),
          password: password(),
        },
        { abortEarly: false, strict: true }
      );

      const res = await login(validationResult);

      notificationService.show({
        title: "You have loggedin successfully",
        duration: 3000,
        closable: true,
        status: "success",
      });

      authDispatch.authenticate(res.data.user);
      navigate("/", {
        replace: true,
      });
    } catch (error: any) {
      if (error instanceof ValidationError) {
        let schemaErrors = handleSchemaError(error, loginErrorFields);
        setErrors(schemaErrors);
      }
      if (error instanceof AxiosError) {
        handleServerError(error);
      }
    }
  }
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
        <SimpleGrid
          as={"form"}
          gap={"$4"}
          mt={"$8"}
          p={"$4"}
          onSubmit={onSubmit}
        >
          <FormControl invalid={Boolean(errors().email)}>
            <FormLabel for="email">Email address</FormLabel>
            <Input
              id="email"
              value={email()}
              onInput={(e) => setEmail(e.currentTarget.value)}
              type="email"
            />
            <Show when={Boolean(errors().email)}>
              <FormErrorMessage>{errors().email}</FormErrorMessage>
            </Show>
          </FormControl>
          <FormControl invalid={Boolean(errors().password)}>
            <FormLabel for="password">Password</FormLabel>
            <Input
              id="password"
              value={password()}
              onInput={(e) => setPassword(e.currentTarget.value)}
              type="password"
            />
            <Show when={Boolean(errors().password)}>
              <FormErrorMessage>{errors().password}</FormErrorMessage>
            </Show>
          </FormControl>

          <Button type="submit" fullWidth variant={"solid"} colorScheme="info">
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
