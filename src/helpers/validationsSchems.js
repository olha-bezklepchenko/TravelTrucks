import * as Yup from "yup";

export const validationBookingSchema = Yup.object({
  name: Yup.string()
    .min(2, "The name is too short")
    .max(50, "The name is too long")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  date: Yup.date().required("Booking date is required"),
  comment: Yup.string(),
});
