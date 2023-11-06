import { styled } from "styled-components";

export const StyledCatalogCart = styled.div`
  position: relative;
  display: flex;
  width: 274px;
  height: 426px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 14px;
  &:hover {
    transform: scale(1.02) translateZ(0);
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 20px var(--blue);
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

  font-weight: 500;
  line-height: 24px;
  &.modalText{
    padding-left: 0;
    padding-right: 0;
  }
`;

export const StyledCarTagsWrap = styled.div`
  color: #8a8a89;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 4px;
  column-gap: 6px;

  font-size: 12px;
  line-height: 18px; /* 150% */

  p:not(:last-child)::after {
    content: "|";
    margin-left: 6px; /* Расстояние между символом | и следующим элементом <p> */
  }
`;

export const StyledCartBtn = styled.button`
  border: none;
  display: flex;
  width: 254px;
  height: 44px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: var(--White, #fff);

  font-size: 14px;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  &:hover {
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
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
