import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div>
      <div className={css.container}>
        *{" "}
        <img
          src="/flat-404-error.png"
          alt="Page not found"
          className={css.image}
        />
      </div>
      <div className={css.containerBottom}></div>
    </div>
  );
};

export default NotFoundPage;
