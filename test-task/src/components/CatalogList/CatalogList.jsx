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
import { useState } from "react";


export const CatalogList = () => {
  const cars = useSelector(selectAllCars);
  const [selectedMake, setSelectedMake] = useState("all");

  const makes = cars.map(car => car.make);
  const uniqueMakes = [...new Set(makes)];

  const filteredCars = selectedMake === "all" ? cars : cars.filter(car => car.make === selectedMake);

  const handleSelectMake = (make) => {
    setSelectedMake(make);
  };


  return (
    <StyledCarsList>
      <StyledCatalogContainer>
        <SearchParamsForm makes={uniqueMakes} onSelectMake={handleSelectMake}/>
        <StyledCatalogList>
          {filteredCars && filteredCars.map((car) => <CatalogCart key={car.id} data={car} />)}
        </StyledCatalogList>
        <PaginationBtn type="button">Load more</PaginationBtn>
      </StyledCatalogContainer>
    </StyledCarsList>
  );
};
