import React from "react";
import { Link } from "gatsby";

import Head from "../components/Head";
import Layout from "../templates/Layout";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";

import projects from "../assets/files/projects";
import resume from "../assets/files/Resume_SarahMorash.pdf";
import dalPres from "../assets/images/dal_presentation.png";
import dalPresPdf from "../assets/files/Tips_from_a_Dal_CS_Grad.pdf";

const Work = () => (
  <Layout>
    <Head title="Work" />

    <Banner title="Work" />

    <div id="main">
      <section id="one">
        <div className="inner">
          <blockquote>
            Great companies don’t hire skilled people and motivate them, they
            hire already motivated people and inspire them. People are either
            motivated or they are not. Unless you give motivated people
            something to believe in, something bigger than their job to work
            toward, they will motivate themselves to find a new job and you’ll
            be stuck with whoever’s left.
            <br />
            <br />- Simon Sinek
          </blockquote>
          <p>
            I am a motivated individual who is constantly looking to better
            herself and learn more. I love to share what I've learned and help
            others!
          </p>
          <a className="button" href={resume}>
            Download my resume
          </a>
        </div>
      </section>
      <section id="two">
        <div className="intro work no-border">
          <h2>Current & Past Projects</h2>
          <hr className="separator" />
        </div>
        <Carousel slides={projects} />
      </section>
      <section id="three">
        <div className="inner">
          <div className="intro work no-border">
            <h2>Presentations & Talks</h2>
            <hr className="separator" />
          </div>
          <section id="two" className="tiles">
            <article
              style={{
                backgroundImage: `url(${dalPres})`
              }}
            >
              <header className="major">
                <h3>Tips from a Dal CS Alum</h3>
                <p>
                  This is a talk I delivered to university students in the
                  Dalhousie Computer Science program on how to make the most out
                  of their time in university based on my experiences.
                </p>
              </header>

              <a href={dalPresPdf} className="link primary" target="_blank" />
            </article>
          </section>
        </div>
      </section>
    </div>
  </Layout>
);

export default Work;
