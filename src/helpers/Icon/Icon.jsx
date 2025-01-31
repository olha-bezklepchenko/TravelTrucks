import clsx from "clsx";
import css from "./Icon.module.css";

const Icon = ({ id, w, h, className }) => {
  return (
    <div className={clsx(css.icon, className)}>
      <svg width={w} height={h}>
        <use href={`/sprite.svg#${id}`} />
      </svg>
    </div>
  );
};

export default Icon;
