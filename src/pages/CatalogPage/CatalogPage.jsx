import Container from "../../components/Container/Container";
import FiltersBar from "../../components/FiltersBar/FiltersBar";
import CampersList from "../../components/CampersList/CampersList";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <div className={css.pageWrapper}>
      <Container>
        <div className={css.gridContainer}>
          <FiltersBar />
          <CampersList />
        </div>
      </Container>
    </div>
  );
};

export default CatalogPage;
