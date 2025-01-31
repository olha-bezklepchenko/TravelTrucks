import Container from "../../components/Container/Container";
import FiltersBar from "../../components/FiltersBar/FiltersBar";
import CampersList from "../../components/CampersList/CampersList";
import css from "./CatalogPage.module.css";
import { fetchCampers } from "../../redux/campers/operations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

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
