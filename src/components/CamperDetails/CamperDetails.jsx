import css from "./CamperDetails.module.css";
import { useState } from "react";
import Icon from "../../helpers/Icon/Icon";

const CamperDetails = ({ camper }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <section className={css.detailsSection}>
      <div className={css.titleWrapper}>
        <h3 className={css.title}>{camper.name}</h3>
        <div className={css.info}>
          <div className={css.infoItem}>
            <Icon id="icon-star" w="16" h="16" className={css.iconStar} />

            <p>
              {camper.rating} ({camper.reviews.length || 0}Reviews)
            </p>
          </div>
          <div className={css.infoItem}>
            <Icon id="icon-map" w="16" h="16" className={css.iconMap} />
            <p>{camper.location}</p>
          </div>
        </div>
        <p className={css.price}> &#8364;{camper.price}</p>
      </div>
      <ul className={css.galleryList}>
        {camper.gallery.map((image, i) => (
          <li
            key={`${camper.name}-${i}`}
            className={css.galleryItem}
            onClick={() => openImage(image.original)}
          >
            <img
              src={image.thumb}
              alt={`Camper ${camper.name}view ${i + 1}`}
              className={css.galleryImage}
            />
          </li>
        ))}
      </ul>
      {/* Модальне вікно для зображення */}
      {selectedImage && (
        <div className={css.modal} onClick={closeImage}>
          <div
            className={css.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Full-size"
              className={css.modalImage}
            />
            <button className={css.closeButton} onClick={closeImage}>
              <Icon id="icon-x" w="32" h="32" />
            </button>
          </div>
        </div>
      )}
      <p className={css.description}>{camper.description}</p>
    </section>
  );
};

export default CamperDetails;
