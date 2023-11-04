import { CloseButton } from "react-bootstrap";
import { styled } from "styled-components";

export const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  /* flex */
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 100%;
  background-color: var(--black);
  box-shadow: 1px 1px 14px 4px rgba(255, 107, 8, 0.42);
  border-radius: 16px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledCarDetailsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
  width: 541px;
  height: 752px;
  padding: 40px;
  margin: 0 auto;
`;

export const StyledModalImage = styled.img`
  width: 461px;
  height: 248px;
  border-radius: 14px;
  background: #f3f3f2;
`;

export const StyledFirstModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 310px;
  height: 72px;
`;

export const StyledCarDescription = styled.p`
  font-family: Manrope;
  font-size: 14px;
  line-height: 20px;
`;

export const StyledSecondModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
`;

export const StyledCloseModalBtn = styled(CloseButton)`
  position: absolute;
  right: 10px;
  top: 5px;
`;
