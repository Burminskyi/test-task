import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import Catalog from "./pages/Catalog/Catalog";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<Catalog />} />
          {/* <Route
            path="library"
            element={<Library />}
          /> */}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};
