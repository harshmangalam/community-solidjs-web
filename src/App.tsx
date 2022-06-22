import { HopeProvider } from "@hope-ui/solid";
import { Route, Routes } from "solid-app-router";
import { Component, lazy, Suspense } from "solid-js";

// routes
const FeedRoute = lazy(() => import("@/routes/FeedRoute"));
const ListingRoute = lazy(() => import("@/routes/ListingRoute"));
const ProfileRoute = lazy(() => import("@/routes/ProfileRoute"));
const TagsRoute = lazy(() => import("@/routes/TagsRoute"));

const AuthLoginRoute = lazy(() => import("@/routes/auth/AuthLoginRoute"));

// layouts
const MainLayout = lazy(() => import("@/layouts/MainLayout"));
const AuthLayout = lazy(() => import("@/layouts/AuthLayout"));
const App: Component = () => {
  return (
    <HopeProvider config={{ initialColorMode: "dark" }}>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="/" element={<AuthLoginRoute />} />
          </Route>
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
