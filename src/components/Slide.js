import React, { useState } from "react";

const Slide = ({ image, title, text, children, link }) => {
  const [isHidden, updateHiddenState] = useState(false);

  return (
    <article
      onMouseOver={() => updateHiddenState(true)}
      onMouseOut={() => updateHiddenState(false)}
      style={{ backgroundImage: `url(${image})` }}
    >
      <header className={`major ${isHidden ? "hide" : ""}`}>
        <h3>{title}</h3>
        <p>{text}</p>
        <p>{children}</p>
      </header>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={link}
        className="link primary"
      />
    </article>
  );
};

export default Slide;
