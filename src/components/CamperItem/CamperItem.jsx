import css from "./CamperItem.module.css";

import { useState } from "react";
import NavButton from "../NavButton/NavButton";
import Icon from "../../helpers/Icon/Icon";
import clsx from "clsx";
import VehicleList from "../VehicleList/VehicleList";

const CamperItem = ({ camper }) => {
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
    <>
      <div className={css.imageWrapper}>
        <img
          className={css.image}
          src={camper.gallery[0].original}
          alt={camper.name}
        />
      </div>
      <div className={css.infoWrapper}>
        <div className={css.titleWrapper}>
          <div className={css.infoTop}>
            <h3 className={css.title}>{camper.name}</h3>
            <p className={css.price}> &#8364;{camper.price}</p>
            <button
              type="button"
              onClick={() => toggleFavorite(camper.id)}
              className={clsx(css.favorite, {
                [css.active]: favorites[camper.id],
              })}
            >
              <Icon
                id="icon-heart"
                w="25"
                h="24"
                className={css.favoriteIcon}
              />
            </button>
          </div>
          <div className={css.infoBottom}>
            <div className={css.infoBottomItem}>
              <Icon id="icon-star" w="16" h="16" className={css.iconStar} />
              <p>
                {camper.rating}({camper.reviews.length} Reviews)
              </p>
            </div>
            <div className={css.infoBottomItem}>
              <Icon id="icon-map" w="16" h="16" className={css.iconMap} />
              <p>{camper.location}</p>
            </div>
          </div>
        </div>
        <p className={css.description}>{camper.description}</p>
        <VehicleList camper={camper} />

        <NavButton to={`/catalog/${camper.id}`} size="small">
          Show More
        </NavButton>
      </div>
    </>
  );
};

export default CamperItem;
