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
import { AxiosError } from "axios";
import { Link, useNavigate } from "solid-app-router";
import { Component, createSignal, Show } from "solid-js";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
});
const AuthLoginRoute: Component = () => {
  const navigate = useNavigate();
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [errors, setErrors] = createSignal({
    email: "",
    password: "",
  });

  async function onSubmit(e: SubmitEvent) {
    e.preventDefault();
    setErrors({});
    try {
      const validationResult = await schema.validate(
        {
          email: email(),
          password: password(),
        },
        { abortEarly: false, strict: true }
      );

      console.log(validationResult);

      const res = await login({ email: email(), password: password() });
      notificationService.show({
        title: "You have loggedin successfully",
        duration: 3000,
        closable: true,
        status: "success",
      });

      navigate("/", {
        replace: true,
      });
    } catch (error: any) {
      if (error instanceof yup.ValidationError) {
        // console.log(error.errors);
        // console.log(error.message);
        console.log(error.inner);

        const errors = { email: "", password: "" };
        error.inner.forEach(({ path, message }) => {
          errors[path] = message;
        });

        setErrors(errors);
        return;
      }

      if (Array.isArray(error.response.data?.message)) {
        error.response.data.message.forEach((msg: string) => {
          notificationService.show({
            title: msg,
            duration: 3000,
            closable: true,
            status: "danger",
          });
        });
        return;
      }

      if (error instanceof AxiosError) {
        notificationService.show({
          title: error.response?.data?.message || error.message,
          duration: 3000,
          closable: true,
          status: "danger",
        });
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
