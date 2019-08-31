import React, { useState } from "react";

const Slide = ({ image, title, text, children, link }) => {
  const [isHidden, updateHiddenState] = useState(false);

  return (
    <article>
      <h3>{title}</h3>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={link}
        className="link primary"
      >
        <img src={image} className="slideImg" alt={title} />
      </a>
      <div className="icons">{children}</div>
      <div className="description">{text}</div>
    </article>
  );
};

export default Slide;
