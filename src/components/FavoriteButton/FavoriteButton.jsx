import Icon from "../../helpers/Icon/Icon";
import css from "./FavoriteButton.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selectors";
import { changeStatusFavorite } from "../../redux/favorites/slice";

const FavoriteButton = ({ id }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.includes(id);

  const handleClick = () => {
    dispatch(changeStatusFavorite(id));
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className={clsx(css.favorite, { [css.active]: isFavorite })}
    >
      <Icon id="icon-heart" w="25" h="24" className={css.favoriteIcon} />
    </button>
  );
};

export default FavoriteButton;
