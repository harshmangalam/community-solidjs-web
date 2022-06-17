import { Heading, HStack, Icon } from "@hope-ui/solid";
import { Link } from "solid-app-router";
import { SiHashnode } from "solid-icons/si";
import { Component } from "solid-js";

const Logo: Component = () => {
  return (
    <Link href="/">
      <HStack spacing={"$2"}>
        <Icon as={SiHashnode} w={"$6"} h={"$6"} />
        <Heading fontSize={"$2xl"}>Community</Heading>
      </HStack>
    </Link>
  );
};

export default Logo;
