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
import { useEffect, useState } from "react";

export const CatalogList = () => {
  const cars = useSelector(selectAllCars);
  const [selectedMake, setSelectedMake] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [hasRendered, setHasRendered] = useState(false);

  const filteredCarsByMake =
    selectedMake === "all"
      ? cars
      : cars.filter((car) => car.make === selectedMake);

  const prices = filteredCarsByMake.map((item) => {
    return parseFloat(item.rentalPrice.replace("$", ""));
  });

  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const priceRange = [];
  for (let price = minPrice; price <= maxPrice; price += 10) {
    priceRange.push(price);
  }

  const makes = cars.map((car) => car.make);
  const uniqueMakes = [...new Set(makes)];

  const filteredCars =
    selectedPrice === "all"
      ? filteredCarsByMake
      : filteredCarsByMake.filter(
          (car) =>
            Number(car.rentalPrice.replace("$", "")) <= Number(selectedPrice)
        );

  useEffect(() => {
    if (!hasRendered) {
      setHasRendered(true);
      return;
    }
  }, [filteredCars, hasRendered]);

  const handleSelectMake = (make) => {
    setSelectedMake(make);
  };

  const handleSelectPrice = (price) => {
    setSelectedPrice(price);
  };

  return (
    <StyledCarsList>
      <StyledCatalogContainer>
        <SearchParamsForm
          makes={uniqueMakes}
          priceRange={priceRange}
          onSelectMake={handleSelectMake}
          onSelectPrice={handleSelectPrice}
        />
        <StyledCatalogList>
          {filteredCars.length > 0
            ? filteredCars.map((car) => <CatalogCart key={car.id} data={car} />)
            : hasRendered && (
                <p>
                  {filteredCarsByMake.length > 0
                    ? `Cars with make ${selectedMake} and price under ${selectedPrice}$ per hour not found, please change your search details and try again`
                    : "No cars available for the selected criteria."}
                </p>
              )}
        </StyledCatalogList>
        <PaginationBtn type="button">Load more</PaginationBtn>
      </StyledCatalogContainer>
    </StyledCarsList>
  );
};
