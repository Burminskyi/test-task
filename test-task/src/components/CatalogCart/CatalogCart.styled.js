import { styled } from "styled-components";

export const StyledCatalogCart = styled.div`
  position: relative;
  display: flex;
  width: 274px;
  height: 426px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 14px;
  &:hover {
    transform: scale(1.02) translateZ(0);
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 20px var(--blue);
    cursor: pointer;
  }
`;

export const StyledCartImage = styled.img`
  width: 274px;
  height: 268px;
  border-radius: 14px;
  object-fit: contain;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
`;

export const StyledCarInfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: inherit;
  padding-left: 10px;
  padding-right: 10px;

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const StyledCarTagsWrap = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 4px;
  column-gap: 12px;
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
`;

export const StyledCartBtn = styled.button`
  border: none;
  display: flex;
  width: inherit;
  height: 44px;
  padding-top: 12px;
  padding-bottom: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: var(--White, #fff);
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  &:hover {
    background: #0b44cd;
  }
  &.modalBtn {
    padding: 12px 50px;
    width: fit-content;
  }
`;

export const FavoriteBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background: transparent;
  border: none;
`;
