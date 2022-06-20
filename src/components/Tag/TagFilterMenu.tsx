import {
  Select,
  SelectContent,
  SelectIcon,
  SelectListbox,
  SelectOption,
  SelectOptionIndicator,
  SelectOptionText,
  SelectPlaceholder,
  SelectTrigger,
  SelectValue,
} from "@hope-ui/solid";
import { Component, For } from "solid-js";

const TagFilterMenu: Component = () => {
  return (
    <Select>
      <SelectTrigger maxW={"$sm"}>
        <SelectPlaceholder>Filter tags</SelectPlaceholder>
        <SelectValue />
        <SelectIcon />
      </SelectTrigger>
      <SelectContent>
        <SelectListbox>
          <For each={["This week", "This month", "This year", "All times"]}>
            {(item) => (
              <SelectOption value={item}>
                <SelectOptionText>{item}</SelectOptionText>
                <SelectOptionIndicator />
              </SelectOption>
            )}
          </For>
        </SelectListbox>
      </SelectContent>
    </Select>
  );
};

export default TagFilterMenu;
