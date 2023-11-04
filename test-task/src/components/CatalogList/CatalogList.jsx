import { useSelector } from "react-redux";
import { CatalogCart } from "../CatalogCart/CatalogCart";
import { SearchParamsForm } from "../SearchForm/SearchParamsForm";
import {
  PaginationBtn,
  StyledCarsList,
  StyledCatalogContainer,
  StyledCatalogList,
} from "./CatalogList.styled";
import { selectAllCars } from "../../redux/Cars/selectors";


export const CatalogList = () => {
  const cars = useSelector(selectAllCars);


  return (
    <StyledCarsList>
      <StyledCatalogContainer>
        <SearchParamsForm />
        <StyledCatalogList>
          {cars && cars.map((car) => <CatalogCart key={car.id} data={car} />)}
        </StyledCatalogList>
        <PaginationBtn type="button">Load more</PaginationBtn>
      </StyledCatalogContainer>
    </StyledCarsList>
  );
};
