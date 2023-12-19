import { useSelector } from "react-redux";

import { selectFavoriteCars } from "../../redux/Cars/selectors";

import { Hero } from "../../components/Hero/Hero";
import { CatalogCart } from "../../components/CatalogCart/CatalogCart";

import {
  StyledCarsList,
  StyledCatalogContainer,
  StyledCatalogList,
  StyledEmptyFavorites,
} from "../../components/CatalogList/CatalogList.styled";

const Favorites = () => {
  const favoriteCars = useSelector(selectFavoriteCars);

  return (
    <>
      <Hero />
      <StyledCarsList>
        <StyledCatalogContainer>
          {favoriteCars.length > 0 ? (
            <StyledCatalogList>
              {favoriteCars.map((car) => (
                <CatalogCart key={car.id} data={car} />
              ))}
            </StyledCatalogList>
          ) : (
            <StyledEmptyFavorites>
              You haven't added any cars to favorites yet
            </StyledEmptyFavorites>
          )}
        </StyledCatalogContainer>
      </StyledCarsList>
    </>
  );
};

export default Favorites;
