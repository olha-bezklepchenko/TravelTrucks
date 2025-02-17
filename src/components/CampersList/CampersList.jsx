import css from "./CampersList.module.css";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import { useDispatch, useSelector } from "react-redux";
import {
  selectCampers,
  selectIsError,
  selectIsLoading,
  selectPage,
  selectTotal,
} from "../../redux/campers/selectors";
import CamperItem from "../CamperItem/CamperItem";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/campers/operations";
import { nextPage } from "../../redux/campers/slice";
import { formatQueryParams } from "../../helpers/queryParams";
import { selectFilters } from "../../redux/filters/selectors";

const CampersList = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const campers = useSelector(selectCampers);
  const page = useSelector(selectPage);
  const total = useSelector(selectTotal);
  const filters = useSelector(selectFilters);
  const totalPages = Math.ceil(total / 4);

  const queryParams = formatQueryParams(filters);

  useEffect(() => {
    if (campers.length >= page * 4) {
      return;
    }

    if (campers.length > 0 && campers.length === total) return;

    dispatch(fetchCampers({ page, queryParams }));
  }, [dispatch, page, queryParams, campers.length, total, isError]);

  const handleLoadMore = () => {
    dispatch(nextPage());
  };

  const isLoadMoreDisabled = page >= totalPages || isLoading;

  return (
    <section>
      <h2 className="visuallyHidden">All Campers</h2>
      {isLoading && <Loader />}
      {isError && (
        <ErrorMessage
          title="Something went wrong..."
          message="We couldn't load the campers. Please check your internet connection
            or try again later."
        />
      )}

      {!isLoading && !isError && campers.length === 0 && (
        <>
          <ErrorMessage
            title="Unfortunately"
            message="No campers found matching your criteria"
          />
        </>
      )}
      <ul className={css.list}>
        {campers?.map((camper) => (
          <li key={camper.id} className={css.item}>
            <CamperItem camper={camper} />
          </li>
        ))}
      </ul>
      <button
        className={css.loadMoreBtn}
        type="button"
        onClick={handleLoadMore}
        disabled={isLoadMoreDisabled}
      >
        Load More
      </button>
    </section>
  );
};

export default CampersList;
