import { Container } from "react-bootstrap";
import { StyledHomeHeader, StyledHomeText } from "../../pages/HomePage/HomePage.styled";
import { StyledBrandName, StyledBrandName2 } from "../NavBar/NavBar.styled";
import { StyledHomeInfo } from "./HomePageDescription.styled";
import { Link } from "react-router-dom";

const HomePageDescription = () => {
  return (
    <StyledHomeInfo>
      <Container>
        <StyledHomeHeader>
        Welcome to <StyledBrandName className="brandMainText">Ukr</StyledBrandName>
          <StyledBrandName2>Sharing</StyledBrandName2>!
        </StyledHomeHeader>
        <StyledHomeText>
          <p className="mainText">
          Welcome to our car rental application in Ukraine! We understand that travel is not just about moving from one place to another. It's a real adventure, and we'll do everything to make this adventure unforgettable.
          </p>
          <p className="listHeader">Our company offers you:</p>
          <ul>
            <li>🚗 A large and diverse selection of cars from various brands and models, so you can find the perfect car for all your needs.</li>
            <li>💰 Attractive prices and flexible rental terms. We understand that everyone has their own budget, so we offer competitive rates and payment options.</li>
            <li>🌍 The opportunity to explore new places and discover unforgettable routes. Our cars are ready to take you to every corner of Ukraine.</li>
            <li>🛠️ High technical readiness and safety. Our cars are always on the road and ready for the journey.</li>
            <li>❤️ An easy and convenient booking process. In a few steps, you can reserve the car of your dreams.</li>
          </ul>
          <p className="navText">Browse our <Link className="textLink" to="catalog">catalog</Link> and select the suitable car</p>
        </StyledHomeText>
      </Container>
    </StyledHomeInfo>
  );
};

export default HomePageDescription;
