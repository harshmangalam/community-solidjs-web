import { Input, InputGroup, InputLeftElement } from "@hope-ui/solid";
import { Component } from "solid-js";
import { BiSearch } from "solid-icons/bi";

const Search: Component = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <BiSearch size={20} />
      </InputLeftElement>
      <Input type="search" placeholder="Search Community..." />
    </InputGroup>
  );
};

export default Search;
