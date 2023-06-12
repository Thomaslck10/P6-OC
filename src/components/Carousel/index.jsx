import '../../styles/Carousel.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function ImageCarousel({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  const changeImage = (direction) => {
    const numberImage = images.length;

    if (direction === 'next') {
      if (numberImage - 1 === currentImage) {
        setCurrentImage(0);
      } else {
        setCurrentImage(currentImage + 1);
      }
    } else {
      if (currentImage === 0) {
        setCurrentImage(numberImage - 1);
      } else {
        setCurrentImage(currentImage - 1);
      }
    }
  };

  const numberImage = images.length;

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          className={`carousel-item ${currentImage === index ? 'active' : ''}`}
          key={index}
        >
          <img src={image} className="locations-img" alt={image} />
        </div>
      ))}
      <div className={`current-img ${numberImage === 1 ? 'active' : ''}`}>
        <p>
          {currentImage + 1}/{numberImage}
        </p>
      </div>
      <div className={`carousel-buttons ${numberImage === 1 ? 'active' : ''}`}>
        <button
          className="carousel-previous"
          onClick={() => changeImage('previous')}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="carousel-next" onClick={() => changeImage('next')}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}

export default ImageCarousel;
