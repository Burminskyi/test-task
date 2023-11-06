import { styled } from "styled-components";

export const StyledHeroSection = styled.section`
  position: relative;
  background-image: linear-gradient(
    86.77deg,
    #111 30.38%,
    rgba(17, 17, 17, 0) 65.61%
  );
`;

export const StyledHeroContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 320px;
  padding-left: 20px;
  padding-right: 20px;
  @media (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

export const StyledHeroInfoWrap = styled.div`
padding-left: 15px;
padding-right: 15px;
  position: absolute;
  bottom: 2px;
  font-size: 10px;
  ul {
    color: #fff;
    display: flex;
    flex-direction: column;
    font-weight: 500;
    font-size: 12px;
    gap: 4px;
    @media (min-width: 600px) {
    font-size: 16px;
    gap: 6px;
  }
  @media (min-width: 1200px) {
    font-size: 18px;
    gap: 10px;
  }
  @media (min-width: 1400px) {
    font-size: 36px;
    margin-bottom: 32px;
    gap: 12px;
    font-size: 20px;
  }
  }
  li {
    list-style-type: circle;
  }
  @media (min-width: 768px) {
    bottom: 15px;
  }
  @media (min-width: 840px) {
    bottom: 20px;
  }
  @media (min-width: 1200px) {
    bottom: 30px;
  }
`;

export const StyledHeroBtnWrap = styled.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
`;

export const StyledMovieCaption = styled.p`
  font-size: 24px;
`;
export const StyledHeroTitle = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
  @media (min-width: 700px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
  @media (min-width: 700px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
  @media (min-width: 992px) {
    font-size: 28px;
    margin-bottom: 24px;
  }
  @media (min-width: 1200px) {
    font-size: 30px;
    margin-bottom: 28px;
  }
  @media (min-width: 1400px) {
    font-size: 36px;
    margin-bottom: 32px;
  }
`;
