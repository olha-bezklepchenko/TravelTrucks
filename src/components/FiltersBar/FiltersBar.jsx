import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { changeFilters, resetFilters } from "../../redux/filters/slice";
import { useEffect, useState } from "react";
import Icon from "../../helpers/Icon/Icon.jsx";
import SubmitButton from "../SubmitButton/SubmitButton.jsx";
import ResetButton from "../ResetButton/ResetButton";
import css from "./FiltersBar.module.css";
import { selectTotal } from "../../redux/campers/selectors.js";
import { toastSuccess } from "../../helpers/toastConfig";
import { resetState } from "../../redux/campers/slice.js";

const locations = [
  "Kyiv, Ukraine",
  "Poltava, Ukraine",
  "Dnipro, Ukraine",
  "Odesa, Ukraine",
  "Kharkiv, Ukraine",
  "Sumy, Ukraine",
  "Lviv, Ukraine",
];

const initialValues = {
  location: "",
  features: [],
  form: "",
};

const FiltersBar = () => {
  const dispatch = useDispatch();
  const [showLocations, setShowLocations] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const [prevTotal, setPrevTotal] = useState(null);
  const total = useSelector(selectTotal);

  const handleSubmit = (values) => {
    dispatch(changeFilters(values));
    setIsSubmited(true);
    setPrevTotal(total);
  };

  const handleLocationSelect = (loc, setFieldValue) => {
    setFieldValue("location", loc);
    setShowLocations(false);
  };

  const handleReset = (resetForm) => {
    dispatch(resetFilters());
    dispatch(resetState());
    resetForm();
    setIsSubmited(false);
  };

  useEffect(() => {
    if (isSubmited && total !== prevTotal) {
      if (total > 0) {
        toastSuccess(`${total} campers found!`);
      }
      return;
    }
  }, [total, isSubmited, prevTotal]);

  return (
    <section className={css.filtersWrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ setFieldValue, resetForm }) => (
          <Form className={css.filtersBar}>
            <div className={css.locationWrapper}>
              <label className={css.locationLabel}>
                <p>Location</p>
                <Field
                  type="text"
                  name="location"
                  id="location"
                  placeholder="City"
                  className={css.locationInput}
                />
                <button
                  type="button"
                  onClick={() => setShowLocations(!showLocations)}
                  className={css.btnMap}
                >
                  <Icon id="icon-map" w="20" h="20" className={css.iconMap} />
                </button>
              </label>

              {showLocations && (
                <div className={css.locationList}>
                  {locations.map((loc) => (
                    <li
                      className={css.locationItem}
                      key={loc}
                      onClick={() => handleLocationSelect(loc, setFieldValue)}
                    >
                      {loc}
                    </li>
                  ))}
                </div>
              )}
            </div>
            <h4 className={css.subtitle}>Filters</h4>
            <div className={css.vehicleBox}>
              <div>
                <h3 className={css.titleGroup}>Vehicle equipment</h3>
                <ul className={css.groupList}>
                  <li className={css.groupItem}>
                    <Field
                      type="checkbox"
                      name="features"
                      value="AC"
                      id="AC"
                      className={css.checkbox}
                    />
                    <label htmlFor="AC" className={css.label}>
                      <Icon id="icon-wind" w="32" h="32" />
                      <p>AC</p>
                    </label>
                  </li>
                  <li className={css.groupItem}>
                    <Field
                      type="checkbox"
                      name="features"
                      value="refrigerator"
                      id="refrigerator"
                      className={css.checkbox}
                    />
                    <label htmlFor="refrigerator" className={css.label}>
                      <Icon id="icon-fridge" w="32" h="32" />
                      <p>Refrigerator</p>
                    </label>
                  </li>
                  <li className={css.groupItem}>
                    <Field
                      type="checkbox"
                      name="features"
                      value="kitchen"
                      id="kitchen"
                      className={css.checkbox}
                    />
                    <label htmlFor="kitchen" className={css.label}>
                      <Icon id="icon-cup" w="32" h="32" />
                      <p> Kitchen</p>
                    </label>
                  </li>
                  <li className={css.groupItem}>
                    <Field
                      type="checkbox"
                      name="features"
                      value="TV"
                      id="TV"
                      className={css.checkbox}
                    />
                    <label htmlFor="TV" className={css.label}>
                      <Icon id="icon-tv" w="32" h="32" />
                      <p>TV</p>
                    </label>
                  </li>
                  <li className={css.groupItem}>
                    <Field
                      type="checkbox"
                      name="features"
                      value="bathroom"
                      id="bathroom"
                      className={css.checkbox}
                    />
                    <label htmlFor="bathroom" className={css.label}>
                      <Icon id="icon-shower" w="32" h="32" />
                      <p>Bathroom</p>
                    </label>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className={css.titleGroup}>Vehicle type</h3>
                <ul className={css.groupList}>
                  <li className={css.groupItem}>
                    <Field
                      type="radio"
                      name="form"
                      value="panelTruck"
                      id="panelTruck"
                      className={css.radio}
                    />
                    <label htmlFor="panelTruck" className={css.label}>
                      <Icon id="icon-grid1x2" w="32" h="32" />
                      <p>Van</p>
                    </label>
                  </li>
                  <li className={css.groupItem}>
                    <Field
                      type="radio"
                      name="form"
                      value="fullyIntegrated"
                      id="fullyIntegrated"
                      className={css.radio}
                    />
                    <label htmlFor="fullyIntegrated" className={css.label}>
                      <Icon id="icon-grid-2x2" w="32" h="32" />
                      <p>Fully Integrated</p>
                    </label>
                  </li>
                  <li className={css.groupItem}>
                    <Field
                      type="radio"
                      name="form"
                      value="alcove"
                      id="alcove"
                      className={css.radio}
                    />
                    <label htmlFor="alcove" className={css.label}>
                      <Icon id="icon-grid-3x3" w="32" h="32" />
                      <p>Alcove</p>
                    </label>
                  </li>
                </ul>
              </div>
            </div>

            <div className={css.buttons}>
              <SubmitButton>Search</SubmitButton>

              {isSubmited && (
                <ResetButton onClick={() => handleReset(resetForm)}>
                  Reset
                </ResetButton>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default FiltersBar;
