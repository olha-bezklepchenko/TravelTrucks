import { ErrorMessage, Field, Form, Formik } from "formik";
import { validationBookingSchema } from "../../helpers/validationsSchems.js";
import DatePicker from "react-datepicker";
import css from "./CamperBookingForm.module.css";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";
import SubmitButton from "../SubmitButton/SubmitButton";

import { toastSuccess } from "../../helpers/toastConfig";

const handleSubmit = (values, actions) => {
  toastSuccess("Form submitted successfully!");
  actions.resetForm();
};

const CamperBookingForm = () => {
  const initialValues = {
    name: "",
    email: "",
    date: null,
    comment: "",
  };

  return (
    <div className={css.boockingSection}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationBookingSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.inputsWrapper}>
            <label className={css.label}>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Name*"
                aria-label="Name"
                className={css.input}
              ></Field>
              <ErrorMessage name="name" component="p" className={css.error} />
            </label>
            <label className={css.label}>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Email*"
                aria-label="Email"
                className={css.input}
              ></Field>
              <ErrorMessage name="email" component="p" className={css.error} />
            </label>
            <label className={css.label}>
              <Field name="date" className={css.input}>
                {({ field, form }) => (
                  <DatePicker
                    {...field}
                    selected={field.value ? new Date(field.value) : null}
                    onChange={(date) => form.setFieldValue("date", date)}
                    minDate={new Date()}
                    dateFormat="dd.MM.yyyy"
                    shouldCloseOnSelect={true}
                    placeholderText="Booking date*"
                    className={css.datePicker}
                  />
                )}
              </Field>
              <ErrorMessage name="date" component="p" className={css.error} />
            </label>
            <label className={css.label}>
              <Field
                type="text"
                as="textarea"
                id="comment"
                name="comment"
                placeholder="Comment"
                aria-label="Comment"
                className={css.comment}
              ></Field>
            </label>
          </div>

          <SubmitButton className={css.btn}>Send</SubmitButton>
        </Form>
      </Formik>
    </div>
  );
};

export default CamperBookingForm;
