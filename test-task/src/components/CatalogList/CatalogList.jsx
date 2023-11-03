
import { SearchParamsForm } from "../SearchForm/SearchParamsForm";
import {
  StyledCatalogContainer,
  StyledCatalogList,
  StyledMoviesList,
} from "./CatalogList.styled";


export const CatalogList = () => {
  return (
    <StyledMoviesList>
      <StyledCatalogContainer>
        <SearchParamsForm />
        <>
          <StyledCatalogList>
            {/* {weeklyTrendingMovies.map((movie) => (
              <MoviesGalleryItem key={movie.id} movie={movie} />
            ))} */}
          </StyledCatalogList>
        </>
      </StyledCatalogContainer>
    </StyledMoviesList>
  );
};
