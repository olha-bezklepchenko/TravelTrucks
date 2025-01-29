const Icon = ({ id, w, h, className }) => {
  return (
    <div className={className || ""}>
      <svg width={w} height={h}>
        <use href={`/sprite.svg#${id}`} />
      </svg>
    </div>
  );
};

export default Icon;
