import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperById } from "../../redux/campers/operations";
import { NavLink, Outlet, useParams } from "react-router-dom";
import {
  selectCamperById,
  selectIsError,
  selectIsLoading,
} from "../../redux/campers/selectors";
import css from "./CamperDetailsPage.module.css";
import Container from "../../components/Container/Container";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import CamperDetails from "../../components/CamperDetails/CamperDetails";
import CamperBookingForm from "../../components/CamperBookingForm/CamperBookingForm";

const CamperDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const camper = useSelector(selectCamperById);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  return (
    <div className={css.pageWrapper}>
      <Container>
        {isLoading && <Loader />}
        {!isLoading && isError && (
          <ErrorMessage
            title="Something went wrong..."
            message="Unable to load camper details. Please try again later."
          />
        )}
        {camper && <CamperDetails camper={camper} />}
        <div className={css.nav}>
          <NavLink
            to="features"
            className={({ isActive }) => (isActive ? css.active : css.link)}
          >
            Features
          </NavLink>
          <NavLink
            to="reviews"
            className={({ isActive }) => (isActive ? css.active : css.link)}
          >
            Reviews
          </NavLink>
        </div>
        <div className={css.gridContainer}>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
          <CamperBookingForm />
        </div>
      </Container>
    </div>
  );
};

export default CamperDetailsPage;
