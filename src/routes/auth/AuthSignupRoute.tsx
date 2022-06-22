import GithubLogin from "@/components/auth/GithubLogin";
import GoogleLogin from "@/components/auth/GoogleLogin";
import { signup } from "@/services";
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
import { signupErrorFields, signupSchema } from "@/schema";
import { handleSchemaError } from "@/utils/handleSchemaError";
import { handleServerError } from "@/utils/handleServerError";
import { ValidationError } from "yup";
import { AxiosError } from "axios";

const AuthSignupRoute: Component = () => {
  const navigate = useNavigate();
  const [name, setName] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [errors, setErrors] = createSignal(signupErrorFields);

  async function onSubmit(e: SubmitEvent) {
    e.preventDefault();
    setErrors(signupErrorFields);
    try {
      const validationResult = await signupSchema.validate(
        {
          name: name(),
          email: email(),
          password: password(),
        },
        { abortEarly: false, strict: true }
      );

      const res = await signup(validationResult);

      notificationService.show({
        title: "Your account created successfully",
        duration: 3000,
        closable: true,
        status: "success",
      });

      navigate("/auth");
    } catch (error: any) {
      if (error instanceof ValidationError) {
        let schemaErrors = handleSchemaError(error);
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
          Sign Up
        </Text>
        <SimpleGrid
          as={"form"}
          gap={"$4"}
          mt={"$8"}
          p={"$4"}
          onSubmit={onSubmit}
        >
          <FormControl invalid={Boolean(errors().name)}>
            <FormLabel for="name">Name</FormLabel>
            <Input
              id="name"
              value={name()}
              onInput={(e) => setName(e.currentTarget.value)}
              type="text"
            />
            <Show when={Boolean(errors().name)}>
              <FormErrorMessage>{errors().name}</FormErrorMessage>
            </Show>
          </FormControl>
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
            Sign Up
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
          href="/auth"
          fontSize={"$lg"}
          bg={"$neutral3"}
          p={"$4"}
          spacing={"$3"}
          justifyContent="center"
        >
          <Text>Already have an account ?</Text>
          <Text _hover={{ textDecoration: "underline" }} color={"$accent10"}>
            Log In
          </Text>
        </HStack>
      </Box>
    </Box>
  );
};

export default AuthSignupRoute;
