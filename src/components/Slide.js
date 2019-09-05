import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const Slide = ({ image, title, text, children, link }) => {
  return (
    <ReactCSSTransitionGroup
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}
      transitionName="fade"
    >
      <article>
        <h3>{title}</h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={link}
          className="link primary"
        >
          <div
            className="slideImg"
            style={{ backgroundImage: `url(${image})` }}
            alt={title}
          />
        </a>
        <div className="icons">{children}</div>
        <div className="description">{text}</div>
      </article>
    </ReactCSSTransitionGroup>
  );
};

export default Slide;
