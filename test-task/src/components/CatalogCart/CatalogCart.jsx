import { StyledCarInfoWrap, StyledCarTagsWrap, StyledCartBtn, StyledCartImage, StyledCatalogCart } from "./CatalogCart.styled";

export const CatalogCart = () => {
  return (
    <StyledCatalogCart>
      <StyledCartImage
        src="https://w.forfun.com/fetch/a4/a48610bf58b05618a5470c6da6ecde49.jpeg"
        alt="car"
      />
      <StyledCarInfoWrap>
        <p>Buick Enclave, 2008</p>
        <p>$40</p>
      </StyledCarInfoWrap>
      <StyledCarTagsWrap>
        <p>Kiev</p>
        <p>Ukraine</p>
        <p>Luxury Car Rentals</p>
        <p>Premium</p>
        <p>Suv</p>
        <p>Enclave</p>
        <p>9582</p>
        <p>Power liftgate</p>
      </StyledCarTagsWrap>
      <StyledCartBtn type="button">Learn More</StyledCartBtn>
    </StyledCatalogCart>
  );
};
