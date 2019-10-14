import React from "react";
import { Link } from "gatsby";

import Head from "../components/Head";
import Layout from "../templates/Layout";
import Hero from "../components/Hero";

import about from "../assets/images/about.png";
import work from "../assets/images/setup.jpg";
import blog from "../assets/images/coffee.jpg";
import contact from "../assets/images/contact.jpg";
import aboutMe from "../assets/images/aboutMe.png";
import hello from "../assets/images/sarah.png";

const Home = () => (
  <Layout>
    <Head title="Home" />

    <Hero />

    <div id="main">
      <section id="two">
        <div className="intro">
          <img src={aboutMe} className="facts" alt="Facts about me" />
          <img src={hello} className="aboutMe" alt="Me" />
        </div>
      </section>
      <section id="one" className="tiles">
        <article style={{ backgroundImage: `url(${about})` }}>
          <header className="major">
            <h3>About Me</h3>
            <p>Learn more about my personal journey.</p>
          </header>
          <Link to="/about" className="link primary" />
        </article>
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
        <article style={{ backgroundImage: `url(${contact})` }}>
          <header className="major">
            <h3>Contact</h3>
            <p>
              Want to get in touch? Email me regarding speaking/outreach
              opportunities, freelance work, or just to say hi :)
            </p>
          </header>
          <Link to="/contact" className="link primary" />
        </article>
      </section>
    </div>
  </Layout>
);

export default Home;
