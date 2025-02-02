import css from "./CampersList.module.css";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import { useSelector } from "react-redux";
import {
  selectCampers,
  selectIsError,
  selectIsLoading,
} from "../../redux/campers/selectors";
import CamperItem from "../CamperItem/CamperItem";

const CampersList = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const campers = useSelector(selectCampers);

  return (
    <section>
      <h2 className="visuallyHidden">All Campers</h2>
      {isLoading && <Loader />}
      {isError && (
        <ErrorMessage
          title="Something went wrong..."
          message=" We couldn't load the campers. Please check your internet connection
            or try again later."
        />
      )}

      <ul className={css.list}>
        {campers?.map((camper) => (
          <li key={camper.id} className={css.item}>
            <CamperItem camper={camper} />
          </li>
        ))}
      </ul>
      <button className={css.loadMoreBtn} type="button">
        Load More
      </button>
    </section>
  );
};

export default CampersList;
