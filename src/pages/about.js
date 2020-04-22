import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import wits from "../images/about/wits.jpg"
import grad from "../images/about/grad.jpg"
import clc from "../images/about/clc.jpg"
import collage from "../images/about/collage.jpg"
import me from "../images/about/animate-me.png"

const About = () => (
  <Layout>
    <SEO title="About" />
    <HERO src={collage} alt="collage" />
    <Intro>
      <CIRCLE src={me} alt="me" />
      <P>
        Hey, my name is Sarah Morash and I have been a software developer for
        over 6 years now. I have been fortunate to work for companies such
        as&nbsp;
        <A href="https://www.t4g.com/" target="_blank">
          T4G
        </A>
        ,&nbsp;
        <A href="https://www.harbr.com/" target="_blank">
          Harbr
        </A>
        , & currently&nbsp;
        <A href="https://www.redspace.com/" target="_blank">
          REDspace
        </A>
        . I started as a backend CMS developer primarily working with Sitecore,
        but I've switched gears to my true passion of frontend development.
      </P>
      <P>
        In my spare time, I am creating for the web, creating art at home, and
        working on getting stronger (mentally & physically). My fiancé is also a
        web developer. Check out his profile&nbsp;
        <A href="https://ohearonkg.dev/" target="_blank">
          here
        </A>
        . Yes, we are a coding couple 👩‍💻❤️👨‍💻
      </P>
    </Intro>
    <DIV>
      <DIVROW>
        <IMG src={grad} alt="DAL Grad" title="DAL Grad" />
        <Text>
          <H2>DAL Grad</H2>
          <HR />
          <P>
            I took a Bachelor of Computer Science from Dalhousie University,
            with a minor in Mathematics & a focus in Music. Learn more about the
            CS program&nbsp;
            <A href="https://cs.dal.ca" target="_blank">
              here
            </A>
            .
          </P>
        </Text>
      </DIVROW>

      <DIVROW>
        <Text>
          <H2>WiTS</H2>
          <HR />
          <P>
            For many years I was on the exec for the Women in Technology Society
            (WiTS). The focus was for women and other underrepresented groups to
            feel welcome in CS, and in the broader tech industry. Learn more
            about the society&nbsp;
            <A href="https://wits.cs.dal.ca/" target="_blank">
              here
            </A>
            .
          </P>
        </Text>
        <IMG src={wits} alt="WITS" title="WITS" />
      </DIVROW>

      <DIVROW>
        <IMG
          src={clc}
          alt="Canada Learning Code"
          title="Canada Learning Code"
        />
        <Text>
          <H2>Canada Learning Code</H2>
          <HR />
          <P>
            I volunteer as a mentor for Canada Learning Code. This teaches kids,
            adults, and teachers alike coding fundamentals, with a variety of
            different topics, like game making, website creation, design, data
            visualization, and more. Learn more about the program&nbsp;
            <A href="https://www.canadalearningcode.ca/" target="_blank">
              here
            </A>
            .
          </P>
        </Text>
      </DIVROW>
    </DIV>
  </Layout>
)

export default About

const DIV = styled.div`
  margin: 100px 0 150px;

  @media only screen and (min-width: 768px) {
    margin: 100px 0 200px;
  }
`

const DIVROW = styled.div`
  max-width: 1440px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  margin: 32px;
  z-index: 10;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin: 32px auto;
    width: 100%;
  }
`

const H2 = styled.h1`
  font-family: "Hipster", cursive;
  color: #fff;
  font-size: 54px;
  filter: drop-shadow(1px 1px 2px #000);
  margin: 0;

  @media only screen and (max-width: 768px) {
    margin: 32px auto;
  }
`

const IMG = styled.img`
  width: 50%;
  max-width: 500px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

const P = styled.p`
  font-family: "UnicaOne", sans-serif;
  text-transform: lowercase;
  color: #000;
  font-size: 22px;
  line-height: 22px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: 500px;
    margin: 32px auto;
  }
`

const Text = styled.div`
  width: 100%;
  padding: 32px;

  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`

const HR = styled.hr`
  width: 32px;
  height: 2px;
`

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
}`

const HERO = styled.img`
  width: 100%;
  height: auto;
  max-height: 1440px;
  margin-bottom: 32px;
`

const CIRCLE = styled.img`
  max-width: 200px;
  height: auto;
  border: 5px solid;
  border-image: linear-gradient(
      to right,
      #000025 20%,
      #f3df95 20%,
      #ff8cab 40%,
      #563bce 60%,
      #00b0c8 80%,
      #000025 80%
    )
    30;
`

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }

  p {
    margin: 0 16px;
  }
`
