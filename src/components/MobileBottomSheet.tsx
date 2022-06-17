import { Component } from "solid-js";
import { BsBell } from "solid-icons/bs";
import { BsBookmarkHeart } from "solid-icons/bs";
import { CgSearch } from "solid-icons/cg";
import { VscHome } from "solid-icons/vsc";
import { Flex, IconButton } from "@hope-ui/solid";

const MobileBottomSheet: Component = () => {
  return (
    <Flex
      pos={"fixed"}
      bottom={0}
      left={0}
      right={0}
      py={"$2"}
      px={"$4"}
      alignItems="center"
      justifyContent={"space-between"}
      bg="$neutral4"
    >
      <IconButton
        aria-label="Home"
        icon={<VscHome size={28} />}
        variant="ghost"
        colorScheme={"neutral"}
      />
      <IconButton
        aria-label="Bookmarks"
        icon={<BsBookmarkHeart size={28} />}
        variant="ghost"
        colorScheme={"neutral"}
      />
      <IconButton
        aria-label="Search"
        icon={<CgSearch size={28} />}
        variant="ghost"
        colorScheme={"neutral"}
      />

      <IconButton
        aria-label="Search"
        icon={<BsBell size={28} />}
        variant="ghost"
        colorScheme={"neutral"}
      />
    </Flex>
  );
};

export default MobileBottomSheet;
