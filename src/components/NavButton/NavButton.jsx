import { Link } from "react-router-dom";
import css from "./NavButton.module.css";
import clsx from "clsx";

const NavButton = ({ to, size = "small", children }) => {
  return (
    <Link to={to} className={clsx(css.navButton, css[size])}>
      {children}
    </Link>
  );
};

export default NavButton;
