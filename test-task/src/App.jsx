import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import Catalog from "./pages/Catalog/Catalog";
import Favorites from "./pages/Favorites/Favorites";
import { useSelector } from "react-redux";
import { selectThemeStyle } from "./redux/Theme/selectors";
import { useEffect } from "react";
import { addThemeStyles } from "./services/themeSwitcher";

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
          <Route
            path="favorites"
            element={<Favorites />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};
