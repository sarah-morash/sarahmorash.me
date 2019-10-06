import React from "react";
import Typed from "react-typed";

/**
 * Hero
 * Creates the main hero/banner on the landing page
 */
const Hero = () => {
  return (
    <section id="banner" className="major">
      <div className="inner">
        <header className="major">
          <h1>Hi 👋 my name is Sarah Morash</h1>
        </header>
        <div className="content">
          <Typed
            className="typedContainer"
            strings={[
              "〉  I love to CODE ",
              "〉  I love to LIFT ",
              "〉  I love to CREATE ",
              "〉  I love to TEACH "
            ]}
            typeSpeed={100}
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
};

export default Hero;
