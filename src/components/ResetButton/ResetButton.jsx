import css from "./ResetButton.module.css";

const ResetButton = ({ onClick, children }) => {
  return (
    <button className={css.resetBtn} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default ResetButton;
