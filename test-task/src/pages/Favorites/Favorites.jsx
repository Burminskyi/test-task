import { useSelector } from "react-redux";
import { selectFavoriteCars } from "../../redux/Cars/selectors";
import { Hero } from "../../components/Hero/Hero";
import { CatalogCart } from "../../components/CatalogCart/CatalogCart";
import {
  StyledCarsList,
  StyledCatalogContainer,
  StyledCatalogList,
} from "../../components/CatalogList/CatalogList.styled";

const Favorites = () => {
  const favoriteCars = useSelector(selectFavoriteCars);

  return (
    <>
      <Hero />
      <StyledCarsList>
        <StyledCatalogContainer>
          <StyledCatalogList>
            {favoriteCars &&
              favoriteCars.map((car) => (
                <CatalogCart key={car.id} data={car} />
              ))}
          </StyledCatalogList>
        </StyledCatalogContainer>
      </StyledCarsList>
    </>
  );
};

export default Favorites;
