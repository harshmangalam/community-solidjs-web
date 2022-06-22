import { Button, Icon } from "@hope-ui/solid";
import { Component } from "solid-js";;
import { AiFillGoogleCircle } from 'solid-icons/ai'
const GoogleLogin: Component = () => {
  return (
    <Button
      variant={"subtle"}
      leftIcon={<Icon w={"$7"} h={"$7"} as={AiFillGoogleCircle} />}
      colorScheme="neutral"
    >
      Google
    </Button>
  );
};

export default GoogleLogin;
