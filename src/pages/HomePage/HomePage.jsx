import css from "./HomePage.module.css";
import Container from "../../components/Container/Container.jsx";
import NavButton from "../../components/NavButton/NavButton.jsx";

const HomePage = () => {
  return (
    <div className={css.hero}>
      <Container>
        <div className={css.heroContent}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <h2 className={css.subtitle}>
            You can find everything you want in our catalog
          </h2>
          <NavButton to="/catalog" size="large">
            View Now
          </NavButton>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
