import React, { useState } from "react";

const Slide = props => {
  const [isHidden, updateHiddenState] = useState(false);

  return (
    <article
      onMouseOver={() => updateHiddenState(true)}
      onMouseOut={() => updateHiddenState(false)}
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <header className={`major ${isHidden ? "hide" : ""}`}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <p>{props.children}</p>
      </header>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={props.link}
        className="link primary"
      />
    </article>
  );
};

export default Slide;
