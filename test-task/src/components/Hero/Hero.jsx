import {
  StyledHeroInfoWrap,
  StyledHeroSection,
  StyledHeroTitle,
} from './Hero.styled';
import logo from "../../img/8a13a2b6554a9cb78bf5113bba7e5ed1.jpg";
import { StyledBrandName, StyledBrandName2 } from '../NavBar/NavBar.styled';
import { Container } from 'react-bootstrap';


export const Hero = () => {

  return (
    <StyledHeroSection>
      <>
        <img
          src={logo}
          alt="HeroLogo"
          style={{ zIndex: "-1", position: "relative" }}
        />
        <Container>
          <StyledHeroInfoWrap>
            <StyledHeroTitle>
              <StyledBrandName>Ukr</StyledBrandName>
              <StyledBrandName2>Sharing</StyledBrandName2> offers:
            </StyledHeroTitle>
            <ul>
              <li>Convenient booking</li>
              <li>Wide selection of cars</li>
              <li>Competitive prices</li>
            </ul>
          </StyledHeroInfoWrap>
        </Container>
      </>
    </StyledHeroSection>
  );
};
