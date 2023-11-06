import { styled } from "styled-components";

export const StyledCarsList = styled.section`
  padding-top: 16px;
  padding-bottom: 100px;
  padding-top: 50px;
`;

export const StyledCatalogList = styled.ul`
  margin-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 29px;
`;

export const StyledCatalogContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 304px;
  @media (min-width: 624px) {
    width: 577px;
  }
  @media (min-width: 992px) {
    width: 880px;
  }
  @media (min-width: 1400px) {
    width: 1184px;
  }
`;

export const PaginationBtn = styled.button`
  display: block;
  margin: auto;
  border: none;
  background: transparent;
  color: #3470ff;

  font-weight: 500;
  line-height: 24px;
  text-decoration-line: underline;
  &:hover {
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    color: #0b44cd;
  }
  &:focus {
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    color: #0b44cd;
  }
  &:active {
    color: #0b44cd;
  }
`;

export const StyledEmptyFavorites = styled.p`
  text-align: center;
    font-size: 40px;
    font-weight: 600;
`;