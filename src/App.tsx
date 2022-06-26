import { HopeProvider, NotificationsProvider } from "@hope-ui/solid";
import axios from "axios";
import { Route, Routes } from "solid-app-router";
import { Component, lazy, Suspense } from "solid-js";
import AuthProvider from "@/context/authProvider";

// routes
const HomeRoute = lazy(() => import("@/routes/HomeRoute"));
const ArticleDetailRoute = lazy(() => import("@/routes/ArticleDetailRoute"));
const ListingRoute = lazy(() => import("@/routes/ListingRoute"));
const ProfileRoute = lazy(() => import("@/routes/ProfileRoute"));
const TagsRoute = lazy(() => import("@/routes/TagsRoute"));
const TagDetailRoute = lazy(() => import("@/routes/TagDetailRoute"));

const AuthLoginRoute = lazy(() => import("@/routes/auth/AuthLoginRoute"));
const AuthSignupRoute = lazy(() => import("@/routes/auth/AuthSignupRoute"));

const WriteArticleRoute = lazy(() => import("@/routes/WriteArticle"));

// layouts
const MainLayout = lazy(() => import("@/layouts/MainLayout"));
const AuthLayout = lazy(() => import("@/layouts/AuthLayout"));

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;
const App: Component = () => {
  return (
    <HopeProvider config={{ initialColorMode: "dark" }}>
      <NotificationsProvider>
        <AuthProvider>
          <Suspense fallback={<p>Loading...</p>}>
            <Routes>
              <Route path="/auth" element={<AuthLayout />}>
                <Route path="/" element={<AuthLoginRoute />} />
                <Route path="/signup" element={<AuthSignupRoute />} />
              </Route>
              <Route path="/write-article" element={<WriteArticleRoute />} />

              <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<HomeRoute />} />
                <Route
                  path="/articles/:articleId"
                  element={<ArticleDetailRoute />}
                />
                <Route path="/listings" element={<ListingRoute />} />
                <Route path="/tags" element={<TagsRoute />} />
                <Route path="/tags/:tagId" element={<TagDetailRoute />} />
                <Route path="/:userName" element={<ProfileRoute />} />
              </Route>
            </Routes>
          </Suspense>
        </AuthProvider>
      </NotificationsProvider>
    </HopeProvider>
  );
};

export default App;
