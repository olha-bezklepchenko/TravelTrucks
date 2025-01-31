import { Link, NavLink } from "react-router-dom";
import css from "./Header.module.css";
import Icon from "../../helpers/Icon/Icon.jsx";

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.wrapper}>
        <Link to="/" className={css.logo}>
          <Icon id="icon-logo" w="136" h="16" />
        </Link>
        <nav className={css.nav}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? css.active : css.link)}
          >
            Home
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) => (isActive ? css.active : css.link)}
          >
            Catalog
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
