import React from "react";
import Typed from "react-typed";

class Banner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
            {/* <ul className="actions">
                            <li><a href="#one" className="button next scrolly">Find out more!</a></li>
                        </ul> */}
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
