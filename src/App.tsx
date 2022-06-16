import { HopeProvider } from "@hope-ui/solid";
import { Route, Routes } from "solid-app-router";
import { Component, lazy, Suspense } from "solid-js";

const HomeRoute = lazy(() => import("./routes/HomeRoute"));
const App: Component = () => {
  return (
    <HopeProvider config={{ initialColorMode: "dark" }}>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomeRoute />}></Route>
        </Routes>
      </Suspense>
    </HopeProvider>
  );
};

export default App;
