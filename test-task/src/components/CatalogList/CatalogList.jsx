import { CatalogCart } from "../CatalogCart/CatalogCart";
import { SearchParamsForm } from "../SearchForm/SearchParamsForm";
import {
  PaginationBtn,
  StyledCarsList,
  StyledCatalogContainer,
  StyledCatalogList,
} from "./CatalogList.styled";

export const CatalogList = () => {
  return (
    <StyledCarsList>
      <StyledCatalogContainer>
        <SearchParamsForm />
        <StyledCatalogList>
          <CatalogCart />
          <CatalogCart />
          <CatalogCart />
          <CatalogCart />
          <CatalogCart />
          <CatalogCart />
          <CatalogCart />
          <CatalogCart />
        </StyledCatalogList>
        <PaginationBtn type="button">Load more</PaginationBtn>
      </StyledCatalogContainer>
    </StyledCarsList>
  );
};
