import css from "./CampersList.module.css";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Icon from "../../helpers/Icon/Icon";
import clsx from "clsx";

import { useSelector } from "react-redux";
import {
  selectCampers,
  selectIsError,
  selectIsLoading,
} from "../../redux/campers/selectors";
import { useState } from "react";
import NavButton from "../NavButton/NavButton";

const CampersList = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const campers = useSelector(selectCampers);

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
    <section>
      <h2 className={css.visuallyHidden}>All Campers</h2>
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
          <li className={css.item} key={camper.id}>
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
                    <Icon
                      id="icon-star"
                      w="16"
                      h="16"
                      className={css.iconStar}
                    />
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
              <ul className={css.vehicleList}>
                <li className={css.vehicleItem}>
                  <Icon
                    id="icon-automatic"
                    w="20"
                    h="20"
                    className={css.vehicleIcon}
                  />
                  <span className={css.vehicleText}>{camper.transmission}</span>
                </li>

                <li className={css.vehicleItem}>
                  <Icon
                    id="icon-petrol"
                    w="20"
                    h="20"
                    className={css.vehicleIcon}
                  />
                  <span className={css.vehicleText}>{camper.engine}</span>
                </li>

                {camper.AC && (
                  <li className={css.vehicleItem}>
                    <Icon
                      id="icon-wind"
                      w="20"
                      h="20"
                      className={css.vehicleIcon}
                    />
                    <span>AC</span>
                  </li>
                )}
                {camper.bathroom && (
                  <li className={css.vehicleItem}>
                    <Icon
                      id="icon-shower"
                      w="20"
                      h="20"
                      className={css.vehicleIcon}
                    />
                    <span>Bathroom</span>
                  </li>
                )}
                {camper.kitchen && (
                  <li className={css.vehicleItem}>
                    <Icon
                      id="icon-cup"
                      w="20"
                      h="20"
                      className={css.vehicleIcon}
                    />
                    <span>Kitchen</span>
                  </li>
                )}
                {camper.TV && (
                  <li className={css.vehicleItem}>
                    <Icon
                      id="icon-tv"
                      w="20"
                      h="20"
                      className={css.vehicleIcon}
                    />
                    <span>TV</span>
                  </li>
                )}
                {camper.radio && (
                  <li className={css.vehicleItem}>
                    <Icon
                      id="icon-radio"
                      w="20"
                      h="20"
                      className={css.vehicleIcon}
                    />
                    <span>Radio</span>
                  </li>
                )}
                {camper.refrigerator && (
                  <li className={css.vehicleItem}>
                    <Icon
                      id="icon-fridge"
                      w="20"
                      h="20"
                      className={css.vehicleIcon}
                    />
                    <span>Refrigerator</span>
                  </li>
                )}
                {camper.microwave && (
                  <li className={css.vehicleItem}>
                    <Icon
                      id="icon-microwave"
                      w="20"
                      h="20"
                      className={css.vehicleIconStroke}
                    />
                    <span>Microwave</span>
                  </li>
                )}
                {camper.gas && (
                  <li className={css.vehicleItem}>
                    <Icon
                      id="icon-gas"
                      w="20"
                      h="20"
                      className={css.vehicleIconStroke}
                    />
                    <span>Gas</span>
                  </li>
                )}
                {camper.water && (
                  <li className={css.vehicleItem}>
                    <Icon
                      id="icon-water"
                      w="20"
                      h="20"
                      className={css.vehicleIconStroke}
                    />
                    <span>Water</span>
                  </li>
                )}
              </ul>
              <NavButton to={`/catalog/${camper.id}`} size="small">
                Show More
              </NavButton>
            </div>
          </li>
        ))}
      </ul>
      <button type="button">Load More</button>
    </section>
  );
};

export default CampersList;
