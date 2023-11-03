import { Container } from "react-bootstrap";
import { StyledHomeHeader, StyledHomeText } from "../../pages/HomePage/HomePage.styled";
import { StyledBrandName, StyledBrandName2 } from "../NavBar/NavBar.styled";

const HomePageDescription = () => {
  return (
    <Container>
      <StyledHomeHeader>
        Вітаємо у <StyledBrandName>Ukr</StyledBrandName>
        <StyledBrandName2>Sharing</StyledBrandName2>!
      </StyledHomeHeader>
      <StyledHomeText>
        <h5>
          Ласкаво просимо до нашого застосунку для прокату автомобілів в
          Україні! Ми знаємо, що подорожі - це не просто переміщення з одного
          місця в інше, а справжня пригода, і ми зробимо все, щоб зробити цю
          пригоду незабутньою.
        </h5>

        <h4>Наша компанія пропонує вам:</h4>
        <p>
          🚗 Великий та різноманітний вибір автомобілів різних марок та моделей,
          щоб ви могли знайти ідеальний автомобіль для кожної вашої потреби.
        </p>
        <p>
          💰 Привабливі ціни та гнучкі умови оренди. Ми розуміємо, що кожен має
          свій бюджет, тому пропонуємо вигідні тарифи та опції оплати.
        </p>
        <p>
          🌍 Можливість досліджувати нові місця та відкривати незабутні шляхи.
          Наші автомобілі готові вас відвести до кожного куточка України.
        </p>
        <p>
          🛠️ Висока технічна готовність та безпека. Наші автомобілі завжди на
          дорозі та готові до подорожі.
        </p>
        <p>
          ❤️ Легкий та зручний процес бронювання. За кілька кроків ви зможете
          забронювати автомобіль своєї мрії.
        </p>
      </StyledHomeText>
    </Container>
  );
};

export default HomePageDescription;
