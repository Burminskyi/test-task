import { CatalogList } from "../../components/CatalogList/CatalogList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCarsThunk } from "../../redux/Cars/operations";
import { Hero } from "../../components/Hero/Hero";

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarsThunk());
  }, [dispatch]);

  return (
    <>
      <Hero />
      <CatalogList />
    </>
  );
};

export default Catalog;
