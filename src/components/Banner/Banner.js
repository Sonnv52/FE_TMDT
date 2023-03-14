import React from 'react'
import img1 from "../../assets/images/banner.png"
import img2 from "../../assets/images/banner-kk.jpeg"
import logo from "../../assets/images/icon-1.png"
import  { useEffect, useState } from "react";
import "./Banner.css"

function Banner() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const prevIndex = slideIndex === 0 ? slides.length - 1 : slideIndex - 1;
      setSlideIndex(prevIndex);
      showSlide(slides[prevIndex]);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [slideIndex]);

  const slides = [
    {
      id: 1,
      src: img1,
      alt: "Image 1",
    },
    {
      id: 2,
      src: img2,
      alt: "Image 2",
    },
    {
      id: 3,
      src: img1,
      alt: "Image 3",
    },
  ];

  function showSlide(slide) {
    const slides = document.getElementsByClassName("slideshow")[0].getElementsByTagName("img");
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }
    document.getElementById(slide.id).classList.add("active");
  }

  function prevSlide() {
    const prevIndex = slideIndex === 0 ? slides.length - 1 : slideIndex - 1;
    setSlideIndex(prevIndex);
    showSlide(slides[prevIndex]);
  }

  function nextSlide() {
    const nextIndex = slideIndex === slides.length - 1 ? 0 : slideIndex + 1;
    setSlideIndex(nextIndex);
    showSlide(slides[nextIndex]);
  }

  return (
    <div className="slideshow-container">
      <div className="slideshow">
        {slides.map((slide) => (
          <img
            key={slide.id}
            id={slide.id}
            src={slide.src}
            alt={slide.alt}
            className={slide.id === 1 ? "active" : ""}
          />
        ))}
      </div>
      <a className="prev" onClick={prevSlide}>&#10094;</a>
      <a className="next" onClick={nextSlide}>&#10095;</a>
    </div>
  );
}

export default Banner;
