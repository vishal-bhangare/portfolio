import { useState } from "react";
import styles from "./ImageGallery.module.scss";

interface ImageGalleryProps {
  images: string[];
  onClose: () => void;
}

const ImageGallery = ({ images, onClose }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.galleryOverlay}>
      <button className={styles.closeButton} onClick={onClose}>
        <i className="fa-solid fa-times"></i>
      </button>

      <button
        className={styles.navButton + " " + styles.prevButton}
        onClick={handlePrev}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      <div className={styles.imageContainer}>
        <img src={images[currentIndex]} alt={`Demo ${currentIndex + 1}`} />
      </div>

      <button
        className={styles.navButton + " " + styles.nextButton}
        onClick={handleNext}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      <div className={styles.counter}>
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ImageGallery;
