import React, { useState } from "react";
import Slide from "./Slide";

import leftArrow from "../assets/images/icons/caret-left.svg";
import rightArrow from "../assets/images/icons/caret-right.svg";

const Carousel = ({ slides }) => {
  const [slidePosition, setSlidePosition] = useState(0);
  const slide = slides[slidePosition];
  const max = slides.length - 1;

  return (
    <div className="carousel">
      {slidePosition !== 0 && (
        <button
          className="left-arrow"
          onClick={() => setSlidePosition(slidePosition - 1)}
        >
          <img src={leftArrow} alt="left" />
        </button>
      )}

      <div className="slide">
        <Slide
          title={slide.title}
          text={slide.text}
          image={slide.image}
          link={slide.link}
        >
          {slide.technologies.map(tech => (
            <img alt={tech.name} src={tech.image} />
          ))}
        </Slide>
      </div>
      {slidePosition !== max && (
        <button
          className="right-arrow"
          onClick={() => setSlidePosition(slidePosition + 1)}
        >
          <img src={rightArrow} alt="right" />
        </button>
      )}
    </div>
  );
};

export default Carousel;
