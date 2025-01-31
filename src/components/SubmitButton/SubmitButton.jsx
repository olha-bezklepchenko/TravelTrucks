import clsx from "clsx";
import css from "./SubmitButton.module.css";

const SubmitButton = ({ children, className, ...props }) => {
  return (
    <button type="submit" className={clsx(css.button, className)} {...props}>
      {children}
    </button>
  );
};

export default SubmitButton;
