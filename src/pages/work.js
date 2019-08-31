import React from "react";

import Head from "../components/Head";
import Layout from "../templates/Layout";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";

import projects from "../assets/files/projects";
import resume from "../assets/files/Resume_SarahMorash.pdf";

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
        <div className="intro no-border">
          <h1>Current/Past Projects</h1>
        </div>
        <Carousel slides={projects} />
      </section>
    </div>
  </Layout>
);

export default Work;
