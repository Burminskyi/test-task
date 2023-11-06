import { useEffect } from "react";

import { CarDetails } from "./CarDetails";

import {
  StyledCloseModalBtn,
  StyledModal,
  StyledModalOverlay,
} from "./ModalPage.styled";

export const ModalPage = ({ data, onClose }) => {
  useEffect(() => {
    document.body.classList.add("no-scroll");

    const keyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", keyDown);

    return () => {
      document.body.classList.remove("no-scroll");

      window.removeEventListener("keydown", keyDown);
    };
  }, [onClose]);

  const onOverlayClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <StyledModalOverlay className="scrollable" onClick={onOverlayClick}>
      <StyledModal id="Modal">
        <StyledCloseModalBtn variant="black" onClick={onClose} />
        <CarDetails data={data} />
      </StyledModal>
    </StyledModalOverlay>
  );
};
