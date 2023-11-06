import { lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";

import { selectThemeStyle } from "./redux/Theme/selectors";
import { addThemeStyles } from "./services/themeSwitcher";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites"));

export const App = () => {
  const themeStyle = useSelector(selectThemeStyle);

  useEffect(() => {
    addThemeStyles(themeStyle);
  }, [themeStyle]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};
