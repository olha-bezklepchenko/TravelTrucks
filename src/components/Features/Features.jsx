import css from "./Features.module.css";
import VehicleList from "../VehicleList/VehicleList.jsx";
import { useSelector } from "react-redux";
import { selectCamperById } from "../../redux/campers/selectors";
import Loader from "../Loader/Loader.jsx";

const Features = () => {
  const camper = useSelector(selectCamperById);

  if (!camper) {
    return <Loader />;
  }

  return (
    <section className={css.sectionFeatures}>
      <h2 className="visuallyHidden">Features</h2>
      <VehicleList camper={camper} />

      <div className={css.vehicleDetails}>
        <h3 className={css.subtitle}>Vehicle details</h3>
        <ul className={css.detailsList}>
          <li className={css.detailsItem}>
            <span>Form</span>
            <span>{camper.form}</span>
          </li>
          <li className={css.detailsItem}>
            <span>Length</span>
            <span>{camper.length}</span>
          </li>
          <li className={css.detailsItem}>
            <span>Width</span>
            <span>{camper.width}</span>
          </li>
          <li className={css.detailsItem}>
            <span>Height</span>
            <span>{camper.height}</span>
          </li>
          <li className={css.detailsItem}>
            <span>Tank</span>
            <span>{camper.tank}</span>
          </li>
          <li className={css.detailsItem}>
            <span>Consumption</span>
            <span>{camper.consumption}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Features;
