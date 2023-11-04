import { useState } from "react";
import {
  StyledCarInfoWrap,
  StyledCarTagsWrap,
  StyledCartBtn,
  StyledCartImage,
  StyledCatalogCart,
} from "./CatalogCart.styled";
import { ModalPage } from "../ModalPage/ModalPage";

export const CatalogCart = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  const onModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
    <StyledCatalogCart>
      <StyledCartImage src={data.img} alt="car" />
      <StyledCarInfoWrap>
        <p>{`${data.make} ${data.model}, ${data.year}`}</p>
        <p>{data.rentalPrice}</p>
      </StyledCarInfoWrap>
      <StyledCarTagsWrap>
        <p>{data.address}</p>
        <p>{data.rentalCompany}</p>
        <p>{data.type}</p>
        <p>{data.make}</p>
        <p>{data.mileage}</p>
      </StyledCarTagsWrap>
      <div></div>
      <StyledCartBtn type="button" onClick={onModal}>Learn More</StyledCartBtn>
    </StyledCatalogCart>
    {showModal && <ModalPage data={data} onClose={onModal} />}
    </>
  );
};
