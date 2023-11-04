import { useEffect } from "react";

import {
  StyledCloseModalBtn,
  StyledModal,
  StyledModalOverlay,
} from "./ModalPage.styled";

import { CarDetails } from "./CarDetails";

export const ModalPage = ({ data, onClose }) => {
  useEffect(() => {
    const keyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", keyDown);

    return () => {
      window.removeEventListener("keydown", keyDown);
    };
  }, [onClose]);

  const onOverlayClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <StyledModalOverlay onClick={onOverlayClick}>
      <StyledModal id="Modal">
        <StyledCloseModalBtn variant="white" onClick={onClose} />
        <CarDetails data={data} />
      </StyledModal>
    </StyledModalOverlay>
  );
};
