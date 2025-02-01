import Icon from "../../helpers/Icon/Icon";
import css from "./FavoriteButton.module.css";
import { useState } from "react";
import clsx from "clsx";

const FavoriteButton = (id) => {
  // тимчасово ----------------------------
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  // ----------------------------------------тимчасово
  return (
    <button
      type="button"
      onClick={() => toggleFavorite(id)}
      className={clsx(css.favorite, {
        [css.active]: favorites[id],
      })}
    >
      <Icon id="icon-heart" w="25" h="24" className={css.favoriteIcon} />
    </button>
  );
};

export default FavoriteButton;
