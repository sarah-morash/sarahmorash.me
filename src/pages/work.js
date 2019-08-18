import React from "react";

import Head from "../components/Head";
import Layout from "../components/Layout";
import BannerLanding from "../components/BannerLanding";
import Slide from "../components/Slide";

import redspace from "../assets/images/redspace.png";
import harbr from "../assets/images/platform.png";
import harbrweb from "../assets/images/harbrweb.png";
import tnb from "../assets/images/TNB.png";
import top from "../assets/images/TOP.png";
import mattamy from "../assets/images/MATTAMY.png";
import rogers from "../assets/images/ROGERS.png";
import nslc from "../assets/images/NSLC.png";
import wholesale from "../assets/images/WHOLESALE.png";

import sitecore from "../assets/images/sitecore.png";
import kentico from "../assets/images/kentico.png";
import redux from "../assets/images/redux.png";
import wordpress from "../assets/images/wordpress.png";
import graphql from "../assets/images/graphql.png";
import react from "../assets/images/react.png";
import sql from "../assets/images/sql.png";
import net from "../assets/images/net.png";
import resume from "../assets/files/Resume_SarahMorash.pdf";

const Work = props => (
  <Layout>
    <Head title="Work" />

    <BannerLanding title="Work" />

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
      </section>
      <h3 className="position">REDspace (2019 +)</h3>
      <section className="tiles">
        <Slide
          title={"BR/Live"}
          text={"Feature creation/optimization & maintenance"}
          image={redspace}
          link={"https://live.bleacherreport.com/"}
        >
          <img src={react} className="icon" alt="React" />
          <img src={redux} className="icon" alt="Redux" />
        </Slide>
      </section>
      <h3 className="position">Harbr (2018 - 2019)</h3>
      <section className="tiles">
        <Slide
          title={"Harbr Platform & Mobile"}
          text={"Feature creation & maintenance"}
          image={harbr}
          link={"https://platform.harbr.com/"}
        >
          <img src={react} className="icon" alt="React" />
          <img src={redux} className="icon" alt="Redux" />
          <img src={graphql} className="icon" alt="GraphQL" />
        </Slide>
        <Slide
          title={"Harbr Website"}
          text={"Multiple redesigns to support rebranding & maintenance"}
          image={harbrweb}
          link={"https://www.harbr.com/"}
        >
          <img src={wordpress} className="icon" alt="WordPress" />
        </Slide>
      </section>
      <h3 className="position">T4G Limited (2014 - 2018)</h3>
      <section className="tiles">
        <Slide
          title={"Tourism New Brunswick"}
          text={"Website redesign, support & maintenance"}
          image={tnb}
          link={"https://www.tourismnewbrunswick.ca/"}
        >
          <img src={sitecore} className="icon" alt="Sitecore" />
          <img src={net} className="icon" alt=".NET" />
          <img src={sql} className="icon" alt="SQL" />
        </Slide>
        <Slide
          title={"Tourism Operator Portal"}
          text={"Website redesign, support & maintenance"}
          image={top}
          link={"https://top.tourismnewbrunswick.ca/"}
        >
          <img src={sitecore} className="icon" alt="Sitecore" />
          <img src={net} className="icon" alt=".NET" />
          <img src={sql} className="icon" alt="SQL" />
        </Slide>
        <Slide
          title={"Mattamy Homes"}
          text={"Website redesign & re-platform, support & maintenance"}
          image={mattamy}
          link={"https://mattamyhomes.com/"}
        >
          <img src={sitecore} className="icon" alt="Sitecore" />
          <img src={net} className="icon" alt=".NET" />
          <img src={sql} className="icon" alt="SQL" />
        </Slide>
        <Slide
          title={"Rogers Dealer Central"}
          text={"Website redesign & re-platform"}
          image={rogers}
          link={"http://www.dealercentral.ca/"}
        >
          <img src={kentico} className="icon" alt="Kentico" />
          <img src={net} className="icon" alt=".NET" />
          <img src={sql} className="icon" alt="SQL" />
        </Slide>
        <Slide
          title={"NS Liquor Corporation"}
          text={"Support & maintenance"}
          image={nslc}
          link={"https://www.mynslc.com/"}
        >
          <img src={sitecore} className="icon" alt="Sitecore" />
          <img src={net} className="icon" alt=".NET" />
          <img src={sql} className="icon" alt="SQL" />
        </Slide>
        <Slide
          title={"MyNSLC Wholesale"}
          text={"Website build"}
          image={wholesale}
          link={"https://www.mynslcwholesale.com/"}
        >
          <img src={sitecore} className="icon" alt="Sitecore" />
          <img src={net} className="icon" alt=".NET" />
          <img src={sql} className="icon" alt="SQL" />
        </Slide>
      </section>
    </div>
  </Layout>
);

export default Work;
