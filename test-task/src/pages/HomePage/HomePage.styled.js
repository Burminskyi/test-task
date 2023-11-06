import { styled } from "styled-components";

export const StyledHomeHeader = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const StyledHomeText = styled.div`
  .mainText {
    font-size: 24px;
    text-align: center;
    margin-bottom: 24px;
  }
  .listHeader {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 18px;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: 18px;
    margin-bottom: 44px;
  }
  .navText {
    text-align: center;
    font-size: 32px;
  }
  .textLink {
    color: #3497ff;
    font-weight: 500;
    transition:
    all 0.1s,
  }
`;