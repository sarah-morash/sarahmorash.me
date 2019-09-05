import React, { useState } from "react";
import Slide from "./Slide";
import leftArrow from "../assets/images/icons/caret-left.svg";
import rightArrow from "../assets/images/icons/caret-right.svg";

const Carousel = ({ slides }) => {
  const [slidePosition, setSlidePosition] = useState(0);
  const slide = slides[slidePosition];
  const max = slides.length - 1;

  const updateSlide = position => {
    setSlidePosition(position);
  };

  return (
    <div className="carousel">
      {slidePosition !== 0 ? (
        <button
          className="left-arrow"
          onClick={() => updateSlide(slidePosition - 1)}
        >
          <img src={leftArrow} alt="left" />
        </button>
      ) : (
        <div className="arrow-placeholder" />
      )}

      <div className="slide">
        <Slide
          title={slide.title}
          text={slide.text}
          image={slide.image}
          link={slide.link}
        >
          {slide.technologies.map((tech, index) => (
            <img alt={tech.name} key={index} src={tech.image} />
          ))}
        </Slide>
      </div>
      {slidePosition !== max ? (
        <button
          className="right-arrow"
          onClick={() => updateSlide(slidePosition + 1)}
        >
          <img src={rightArrow} alt="right" />
        </button>
      ) : (
        <div className="arrow-placeholder" />
      )}
    </div>
  );
};

export default Carousel;
