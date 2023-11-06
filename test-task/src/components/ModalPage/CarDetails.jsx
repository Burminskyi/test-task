import {
  StyledCarDescription,
  StyledCarDetailsContainer,
  StyledFirstModalWrap,
  StyledModalBtn,
  StyledModalImage,
  StyledSecondModalWrap,
  StyledThirdModalWrap,
} from "./ModalPage.styled";
import {
  StyledCarInfoWrap,
  StyledCarTagsWrap,
} from "../CatalogCart/CatalogCart.styled";

export const CarDetails = ({ data }) => {

  const conditions = data.rentalConditions.split('\n');

  return (
    <StyledCarDetailsContainer>
      <StyledModalImage src={data.img} alt="image" />
      <StyledFirstModalWrap>
        <StyledCarInfoWrap className="modalText">
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
            <StyledThirdModalWrap><p key={index}>{item}</p></StyledThirdModalWrap>
          ))}
        </StyledCarTagsWrap>
      </StyledSecondModalWrap>
      <StyledModalBtn href={`tel:${'+380730000000'}`}>
        Rental car
      </StyledModalBtn>
    </StyledCarDetailsContainer>
  );
};
