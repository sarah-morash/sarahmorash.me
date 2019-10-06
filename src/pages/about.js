import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

import Head from "../components/Head";
import Layout from "../templates/Layout";
import Banner from "../components/Banner";

import work from "../assets/images/setup.jpg";
import blog from "../assets/images/coffee.jpg";

const About = ({ data }) => (
  <Layout>
    <Head title="About" />

    <Banner title="About Me" />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header>
            <Img
              className="fullWidth"
              fluid={data.file.childImageSharp.fluid}
              alt="Collage"
            />
            <div className="bio">
              <h3>10 Facts About Me</h3>
              <ol>
                <li>
                  My name is Sarah, I live in Halifax NS, and I have been
                  working in the technology industry for over 6 years.
                </li>
                <li>
                  I graduated from Dalhousie with a BCS (Co-op) and a minor in
                  Mathematics in 2015.
                </li>
                <li>
                  I love Crossfit and Powerlifting. My favourite strength
                  training exercises are bench press and deadlifts, and my best
                  WODs (workout of the days) are long AMRAPs, as I'm generally
                  pretty good at pacing myself!
                </li>
                <li>
                  I love music. I took performance flute courses in University,
                  and also sang/performed in my spare time through various
                  organizations like Dalhousie University and The Halifax Music
                  Co-op. I've also volunteered for the Halifax Jazz Festival and
                  the Halifax Pop Explosion.
                </li>
                <li>
                  Places I have visted in the past 2 years:
                  <ul>
                    <li>Toronto</li>
                    <li>Maine</li>
                    <li>Boston</li>
                    <li>San Fransisco</li>
                    <li>New York</li>
                    <li>Seattle</li>
                  </ul>
                </li>
                <li>
                  I love to stay active within the development community. I am a
                  mentor for Canada Learning Code and also attend the monthly
                  Halifax React Meetup.
                </li>
                <li>
                  I love to be creative. I love making paintings, as well as
                  papern and digital designs like posters and cards.
                </li>
                <li>I love iced coffee. Iced coffee over hot coffee anyday.</li>
                <li>
                  My fiancé also codes - a couple who codes together stays
                  together ;)
                </li>
                <li>
                  Next vacation: either a Caribbean cruise, or taking the train
                  through Europe!
                </li>
              </ol>
            </div>
          </header>
        </div>
      </section>
      <section id="two" className="tiles">
        <article style={{ backgroundImage: `url(${work})` }}>
          <header className="major">
            <h3>Work</h3>
            <p>
              I have been working for over six years in software development.
              Check out my resume and some of my past/current projects.
            </p>
          </header>
          <Link to="/work" className="link primary" />
        </article>
        <article style={{ backgroundImage: `url(${blog})` }}>
          <header className="major">
            <h3>Blog</h3>
            <p>
              I'll share my tips and tricks with fitness, health, coding,
              adulting, travelling adventures!
            </p>
          </header>
          <Link to="/blog" className="link primary" />
        </article>
      </section>
    </div>
  </Layout>
);

export const query = graphql`
  query {
    file(relativePath: { eq: "collage.png" }) {
      childImageSharp {
        fluid(maxWidth: 930) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

export default About;
