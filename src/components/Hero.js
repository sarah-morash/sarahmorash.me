import React from "react";
import Typed from "react-typed";

/**
 * Hero
 * Creates the main hero/banner on the landing page
 */
const Hero = () => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>Hi 👋 my name is Sarah Morash</h1>
      </header>
      <div className="content">
        <Typed
          className="typedContainer"
          strings={[
            ">  I love to code",
            ">  I love to teach",
            ">  I love to lift",
            ">  I love to be creative"
          ]}
          typeSpeed={40}
          backSpeed={50}
          attr="placeholder"
          loop
        >
          <input className="typedInput" type="text" />
        </Typed>
      </div>
    </div>
  </section>
);

export default Hero;
