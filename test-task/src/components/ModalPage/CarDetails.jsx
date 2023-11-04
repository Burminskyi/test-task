import {
  StyledCarDescription,
  StyledCarDetailsContainer,
  StyledFirstModalWrap,
  StyledModalImage,
  StyledSecondModalWrap,
} from "./ModalPage.styled";
import {
  StyledCarInfoWrap,
  StyledCarTagsWrap,
  StyledCartBtn,
} from "../CatalogCart/CatalogCart.styled";

export const CarDetails = ({ data }) => {

  const conditions = data.rentalConditions.split('\n');

  return (
    <StyledCarDetailsContainer>
      <StyledModalImage src={data.img} alt="image" />
      <StyledFirstModalWrap>
        <StyledCarInfoWrap>
          <p>{`${data.make} ${data.model}, ${data.year}`}</p>
        </StyledCarInfoWrap>
        <StyledCarTagsWrap>
          <p>{data.address}</p>
          <p>{data.rentalCompany}</p>
          <p>{data.type}</p>
          <p>{data.make}</p>
          <p>{data.mileage}</p>
        </StyledCarTagsWrap>
      </StyledFirstModalWrap>
      <StyledCarDescription>{data.description}</StyledCarDescription>
      <StyledSecondModalWrap>
        <p>Accessories and functionalities:</p>
        <StyledCarTagsWrap>
          {data.accessories.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
          {data.functionalities.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </StyledCarTagsWrap>
      </StyledSecondModalWrap>
      <StyledSecondModalWrap>
        <p>Rental Conditions:</p>
        <StyledCarTagsWrap>
        {conditions.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </StyledCarTagsWrap>
      </StyledSecondModalWrap>
      <StyledCartBtn type="button" className="modalBtn">
        Rental car
      </StyledCartBtn>
    </StyledCarDetailsContainer>
  );
};
