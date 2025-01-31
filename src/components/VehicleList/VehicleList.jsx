import css from "./VehicleList.module.css";
import Icon from "../../helpers/Icon/Icon";

const VehicleList = ({ camper }) => {
  return (
    <ul className={css.vehicleList}>
      <li className={css.vehicleItem}>
        <Icon id="icon-automatic" w="20" h="20" className={css.vehicleIcon} />
        <span className={css.vehicleText}>{camper.transmission}</span>
      </li>

      <li className={css.vehicleItem}>
        <Icon id="icon-petrol" w="20" h="20" className={css.vehicleIcon} />
        <span className={css.vehicleText}>{camper.engine}</span>
      </li>

      {camper.AC && (
        <li className={css.vehicleItem}>
          <Icon id="icon-wind" w="20" h="20" className={css.vehicleIcon} />
          <span>AC</span>
        </li>
      )}
      {camper.bathroom && (
        <li className={css.vehicleItem}>
          <Icon id="icon-shower" w="20" h="20" className={css.vehicleIcon} />
          <span>Bathroom</span>
        </li>
      )}
      {camper.kitchen && (
        <li className={css.vehicleItem}>
          <Icon id="icon-cup" w="20" h="20" className={css.vehicleIcon} />
          <span>Kitchen</span>
        </li>
      )}
      {camper.TV && (
        <li className={css.vehicleItem}>
          <Icon id="icon-tv" w="20" h="20" className={css.vehicleIcon} />
          <span>TV</span>
        </li>
      )}
      {camper.radio && (
        <li className={css.vehicleItem}>
          <Icon id="icon-radio" w="20" h="20" className={css.vehicleIcon} />
          <span>Radio</span>
        </li>
      )}
      {camper.refrigerator && (
        <li className={css.vehicleItem}>
          <Icon id="icon-fridge" w="20" h="20" className={css.vehicleIcon} />
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
          <Icon id="icon-gas" w="20" h="20" className={css.vehicleIconStroke} />
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
  );
};

export default VehicleList;
