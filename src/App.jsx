import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { Toaster } from "react-hot-toast";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader/Loader";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const CamperDetailsPage = lazy(() =>
  import("./pages/CamperDetailsPage/CamperDetailsPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const Features = lazy(() => import("./components/Features/Features"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));

const App = () => {
  return (
    <>
      <Toaster />
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperDetailsPage />}>
            <Route index element={<Features />} />
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
