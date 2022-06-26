import { Button } from "@hope-ui/solid";
import { BsBookmark } from "solid-icons/bs";

export default function BookmarkArticle() {
  return (
    <Button
      aria-label="Bookmark"
      leftIcon={<BsBookmark size={20} />}
      variant="ghost"
      colorScheme={"neutral"}
    >
      45
    </Button>
  );
}
