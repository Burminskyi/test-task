import {
  StyledHeroContainer,
  StyledHeroInfoWrap,
  StyledHeroSection,
  StyledHeroTitle,
  StyledMovieCaption,
} from './Hero.styled';
import logo from "../../img/8a13a2b6554a9cb78bf5113bba7e5ed1.jpg";
import { StyledBrandName2 } from '../NavBar/NavBar.styled';
import { Container } from 'react-bootstrap';


const Hero = () => {

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
              Ukr
              <StyledBrandName2>Sharing</StyledBrandName2> це:
            </StyledHeroTitle>
            <StyledMovieCaption>Зручне бронювання</StyledMovieCaption>
            <StyledMovieCaption>Великий вибір авто</StyledMovieCaption>
            <StyledMovieCaption>Вигідні ціни</StyledMovieCaption>
          </StyledHeroInfoWrap>
        </Container>
      </>
    </StyledHeroSection>
  );
};

export default Hero;
