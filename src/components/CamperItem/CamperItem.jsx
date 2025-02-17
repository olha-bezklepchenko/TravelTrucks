import css from "./CamperItem.module.css";

import NavButton from "../NavButton/NavButton";
import Icon from "../../helpers/Icon/Icon";

import VehicleList from "../VehicleList/VehicleList";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const CamperItem = ({ camper }) => {
  return (
    <>
      <div className={css.imageWrapper}>
        <img
          className={css.image}
          src={camper.gallery[0].thumb}
          alt={camper.name}
        />
      </div>
      <div className={css.infoWrapper}>
        <div className={css.titleWrapper}>
          <div className={css.infoTop}>
            <h3 className={css.title}>{camper.name}</h3>
            <p className={css.price}> &#8364;{camper.price}.00</p>
            <FavoriteButton id={camper.id} />
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
