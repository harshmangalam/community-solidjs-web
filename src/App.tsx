import { HopeProvider } from "@hope-ui/solid";
import type { Component } from "solid-js";

const App: Component = () => {
  return <HopeProvider config={{ initialColorMode: "dark" }}></HopeProvider>;
};

export default App;
