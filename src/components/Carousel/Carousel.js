import { useState, useEffect, useRef } from "react";
import "./Carousel.scss";

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const timeOut = useRef(null);

  useEffect(() => {
    timeOut.current = autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 2500);
  });

  const slideRight = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  const slideLeft = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        clearTimeout(timeOut.current);
        setAutoPlay(false);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}>
      <div className="carousel__wrapper">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className={
                index === currentImage
                  ? "card card--active"
                  : "card"
              }>
              <img
                className="card__image"
                src={image.url}
                alt="website frames"
              />
              <h3 className="card__title">{image.title}</h3>
            </div>
          );
        })}
        <div
          className="carousel__arrow carousel__arrow--left"
          onClick={slideLeft}>
          &lsaquo;
        </div>
        <div
          className="carousel__arrow carousel__arrow--right"
          onClick={slideRight}>
          &rsaquo;
        </div>
        <div className="pagination">
          {images.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index === currentImage
                    ? "pagination__dot pagination__dot--active"
                    : "pagination__dot"
                }
                onClick={() => setCurrentImage(index)}></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
