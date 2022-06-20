import { HopeProvider } from "@hope-ui/solid";
import { Route, Routes } from "solid-app-router";
import { Component, lazy, Suspense } from "solid-js";

// routes
const FeedRoute = lazy(() => import("@/routes/FeedRoute"));
const ListingRoute = lazy(() => import("@/routes/ListingRoute"));
const ProfileRoute = lazy(() => import("@/routes/ProfileRoute"));
const TagsRoute = lazy(() => import("@/routes/TagsRoute"));
// layouts

const MainLayout = lazy(() => import("@/layouts/MainLayout"));
const App: Component = () => {
  return (
    <HopeProvider config={{ initialColorMode: "dark" }}>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<FeedRoute />} />
            <Route path="/listings" element={<ListingRoute />} />

            <Route path="/tags" element={<TagsRoute />} />
            <Route path="/:userName" element={<ProfileRoute />} />
          </Route>
        </Routes>
      </Suspense>
    </HopeProvider>
  );
};

export default App;
