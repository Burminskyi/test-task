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
  width: 1184px;
`;

export const StyledWeeklyTrendsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const PaginationBtn = styled.button`
  display: block;
  margin: auto;
  border: none;
  background: transparent;
  color: #3470ff;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  text-decoration-line: underline;
  &:hover {
    color: #0b44cd;
  }
  &:focus {
    color: #0b44cd;
  }
  &:active {
    color: #0b44cd;
  }
`;
