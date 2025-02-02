import css from "./Reviews.module.css";
import { useSelector } from "react-redux";
import { selectCamperById } from "../../redux/campers/selectors";
import Loader from "../Loader/Loader.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import Icon from "../../helpers/Icon/Icon.jsx";
import clsx from "clsx";

const Reviews = () => {
  const camper = useSelector(selectCamperById);

  if (!camper) {
    return <Loader />;
  }

  const { reviews } = camper;
  if (reviews.length === 0) {
    return (
      <ErrorMessage
        title="Unfortunately,"
        message="there are no reviews yet..."
      />
    );
  }

  return (
    <section>
      <h3 className="visuallyHidden">Reviews</h3>
      <ul className={css.reviewList}>
        {reviews?.map((review, i) => (
          <li key={`review-${i}`} className={css.reviewItem}>
            <div className={css.reviewTop}>
              <p className={css.reviewAvatar}>
                {review.reviewer_name.slice(0, 1)}
              </p>
              <div>
                <p className={css.reviewTitle}>{review.reviewer_name}</p>
                <div className={css.reviewRating}>
                  {[...Array(5)].map((_, index) => (
                    <Icon
                      key={index}
                      id="icon-star"
                      w={16}
                      h={16}
                      className={clsx(css.star, {
                        [css.filled]: index < review.reviewer_rating,
                      })}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className={css.reviewComment}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Reviews;
