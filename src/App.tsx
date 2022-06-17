import { HopeProvider } from "@hope-ui/solid";
import { Route, Routes } from "solid-app-router";
import { Component, lazy, Suspense } from "solid-js";

// routes
const HomeRoute = lazy(() => import("@/routes/HomeRoute"));
const ListingRoute = lazy(() => import("@/routes/ListingRoute"));

// layouts

const MainLayout = lazy(() => import("@/layouts/MainLayout"));
const App: Component = () => {
  return (
    <HopeProvider config={{ initialColorMode: "dark" }}>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomeRoute />} />
            <Route path="/listings" element={<ListingRoute />} />
          </Route>
        </Routes>
      </Suspense>
    </HopeProvider>
  );
};

export default App;
