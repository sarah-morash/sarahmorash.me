import React from "react";

/**
 * Banner
 * Creates a generic banner/hero for display on any page
 */
const Banner = props => (
  <section id="banner" className="style2">
    <div className="inner">
      <header className="major">
        <h1>{props.title}</h1>
      </header>
      <div className="content">
        <p>{props.subtitle}</p>
      </div>
    </div>
  </section>
);

export default Banner;
