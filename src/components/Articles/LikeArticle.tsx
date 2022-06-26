import { Button } from "@hope-ui/solid";
import { BsHeart } from "solid-icons/bs";

export default function LikeArticle() {
  return (
    <Button
      aria-label="Heart"
      leftIcon={<BsHeart size={20} />}
      variant="ghost"
      colorScheme={"neutral"}
    >
      566
    </Button>
  );
}
