import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import Hero from "../components/hero";
import SEO from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <DIV>
        <FLEX>
          <BLURB>
            <SPAN className="fas fa-anchor" style={{ color: "#f3df95" }} />
            <P>
              Born & raised in Nova Scotia, Canada. You know, that place where
              Ellen Page, Sidney Crosby, Sarah McLachlan & Trailer Park Boys
              come from 😉 #EASTCOAST
            </P>
          </BLURB>

          <BLURB>
            <SPAN className="fas fa-terminal" style={{ color: "#563bce" }} />
            <P>
              Over six years of software development experience. From fullstack
              CMS development, to front-end react development, and working on
              expanding my cloud knowledge with AWS & learning GO! Passion for
              learning new technologies and providing mentorship/teaching
              others.
            </P>
          </BLURB>

          <BLURB>
            <SPAN className="fas fa-dumbbell" style={{ color: "#ff8cab" }} />
            <P>
              When I'm not coding, I'm working on my fitness. I am a regular
              crossfitter @&nbsp;
              <A href="http://www.crossfitkinetics.com/" target="_blank">
                Crossfit Kinetics
              </A>
              &nbsp;who enjoys long WODs, heavy weights (powerlifting FTW), and
              double unders 💪
            </P>
          </BLURB>
        </FLEX>
      </DIV>
    </Layout>
  );
};

export default IndexPage;

const DIV = styled.div`
  margin: auto 32px;
`;

const SPAN = styled.span`
  font-size: 64px;
  color: #563bce;
  opacity: 0.5;
`;

const P = styled.p`
  font-family: "UnicaOne", sans-serif;
  -webkit-font-smoothing: auto;
  color: #000;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0px;
  width: 100%;
  margin: 16px 0;
  text-justify: inter-word;

  @media only screen and (min-width: 768px) {
    padding: 32px;
  }
`;

const FLEX = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0 0 100px;

  @media only screen and (min-width: 768px) {
    margin: 0 0 150px;
  }
`;

const BLURB = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px 0;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    padding: 0;
  }
`;

const A = styled.a`
  font-size: 20px;
  font-weight: bold;
  font-family: "UnicaOne",sans-serif;
  text-decoration: none;
  color: #fff;
  transition: filter 0.3s;
  text-shadow: 0px 0px 3px rgba(86,59,206,1);

  &:hover {
    transition: filter 0.3s;
    filter: drop-shadow(0px 0px 5px rgba(0,176,200,1));
  }
}`;
