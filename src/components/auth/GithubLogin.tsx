import { Button, Icon } from "@hope-ui/solid";
import { Component } from "solid-js";
import { BsGithub } from "solid-icons/bs";

const GithubLogin: Component = () => {
  return (
    <Button
      variant={"subtle"}
      leftIcon={<Icon w={"$7"} h={"$7"} as={BsGithub} />}
      colorScheme="neutral"
    >
      Github
    </Button>
  );
};

export default GithubLogin;
