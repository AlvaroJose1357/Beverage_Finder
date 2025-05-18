import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "../layouts/Layout";

const IndexPage = lazy(() => import("../pages/IndexPage"));
const FavoritePage = lazy(() => import("../pages/FavoritePage"));
const GenerateAI = lazy(() => import("../pages/GenerateAI"));
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <IndexPage />
              </Suspense>
            }
            index
          />
          <Route
            path="/favorites"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <FavoritePage />
              </Suspense>
            }
          />
          <Route
            path="/generate-ai"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <GenerateAI />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
