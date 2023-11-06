import { Link } from "react-router-dom";
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

export const StyledHomeHeaders = styled.h4`
  margin-bottom: 15px;
`;

export const StyledHomeList = styled.ul`
  font-size: 14px;
`;

export const StyledHomeOrderedList = styled.ol`
  font-size: 14px;
`;
export const StyledHomeParagraph = styled.p`
  margin-bottom: 16px;
`;

export const StyledHomeNavigation = styled.p`
  margin-bottom: 30px;
  margin-top: 30px;
`;
export const StyledHomeNavigationItem = styled(Link)`
  color: #0d6efd;
  font-weight: 600;
`;

export const StyledHomeNavigationItemUnactive = styled(Link)`
  color: currentColor;
  pointer-events: none;
  cursor: not-allowed;
  opacity: 0.5;
  text-decoration: none;
`;
