import React, { useState } from 'react';
import './CarouselComponent.css';
import logo from './images/logo.png'
import image1 from './images/1.webp'
import image2 from './images/2.webp'
import image3 from './images/3.webp'

const CarouselComponent2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample slides
  const slides = [
    { id: 1, image: image1, caption: `Welcome to Global Sales Corporation` },
    { id: 2, image: image2, caption: 'Plastic Raw Material Importers' },
    { id: 3, image: image3, caption: `Fullfilling India's Plastic Demand` },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button left" onClick={prevSlide}>
        ❮
      </button>
      <div className="carousel-slide">
        <img src={slides[currentIndex].image} alt={`Slide ${currentIndex + 1}`} />
        <div className="carousel-caption"><b>{slides[currentIndex].caption}</b></div>
      </div>
      <button className="carousel-button right" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
};

export default CarouselComponent2;
