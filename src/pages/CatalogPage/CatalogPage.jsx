import Container from "../../components/Container/Container";
import Filters from "../../components/Filters/Filters";
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
          <Filters />
          <CampersList />
        </div>
      </Container>
    </div>
  );
};

export default CatalogPage;
