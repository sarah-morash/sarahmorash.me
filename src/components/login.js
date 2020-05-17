import React, { useState } from "react";
import { navigate, useStaticQuery } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

import { isLoggedIn } from "../services/auth";
import Layout from "./layout";
import SEO from "./seo";

import "../css/all.min.css";
import "../css/main.css";

const Login = () => {
  const { bw, closeup, hero } = useStaticQuery(graphql`
    query {
      bw: file(relativePath: { eq: "wedding/bw.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      closeup: file(relativePath: { eq: "wedding/close-up.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hero: file(relativePath: { eq: "wedding/hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const [password, setPassword] = useState("");

  // const handleUpdate = event => {
  //   setPassword(event.target.value);
  // };

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   handleLogin(password);
  // };

  if (isLoggedIn()) {
    navigate(`/andkg`);
  }

  return (
    <Layout>
      <SEO title="Wedding" />
      <Hero source={hero.childImageSharp.fluid.src}>
        <OVERLAYTOP>
          <H1>Our Happily Ever After</H1>
        </OVERLAYTOP>
      </Hero>
      <DIVROW>
        <Closeup fluid={closeup.childImageSharp.fluid} alt="Closeup photo" />
        <Text>
          <H2>About Us</H2>
          <HR />
          <P>
            It all started more than 3 years ago at a Crossfit gym. We quickly
            realized that we had so much in common... fitness, coding, and our
            love of treats 🍪 #balance
          </P>
          <P>
            We have been through a lot of things together as boyfriend &
            girlfriend - through jobs, moving & travelling together. Now we want
            to continue our journey as husband and wife 💍
          </P>
        </Text>
      </DIVROW>
      <BW source={bw.childImageSharp.fluid.src}>
        <OVERLAY />
      </BW>
      <DIV>
        <H2>more info coming soon!</H2>
      </DIV>
      {/* 
      <H2>login</H2>
      <form
        method="post"
        onSubmit={event => {
          handleSubmit(event)
          navigate(`/andkg`)
        }}
      >
        <LABEL>
          Password
          <PASSWORD type="password" name="password" onChange={handleUpdate} />
        </LABEL>
        <LOGIN type="submit" value="Log In" />
      </form> */}
    </Layout>
  );
};

export default Login;

const DIV = styled.div`
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 32px auto;
  max-width: 1440px;
  z-index: 100;
  margin-bottom: 200px;
`;

const DIVROW = styled.div`
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    margin: 32px auto;
  }
`;

const H1 = styled.h1`
  font-family: "Hipster", cursive;
  color: #fff;
  padding-top: 20px;
  font-size: 60px;
  filter: drop-shadow(1px 1px 2px #000);
  margin: 0;

  @media only screen and (min-width: 768px) {
    font-size: 80px;
  }
`;

const H2 = styled.h1`
  font-family: "Hipster", cursive;
  color: #fff;
  filter: drop-shadow(1px 1px 2px #000);
  margin: 0;
  font-size: 60px;

  @media only screen and (min-width: 768px) {
    font-size: 80px;
  }
`;

const LABEL = styled.label`
  font-family: "Scout", sans-serif;
  -webkit-font-smoothing: auto;
  color: #000;
  font-size: 28px;
  line-height: 16px;
  letter-spacing: 0px;
  margin: 32px 0 0 0;
  display: block;
`;

const PASSWORD = styled.input`
  display: block;
  padding: 6px 8px;
  margin: 20px 0;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  border: 1px solid rgba(0, 176, 200, 0.1);
  border-radius: 8px;
  font-family: "Scout", sans-serif;
  text-align: left;
  letter-spacing: 0px;
  text-decoration: none;
  color: #000;
  filter: drop-shadow(0px 0px 5px rgba(0, 176, 200, 1));
  background: #fff;
  transition: filter 0.3s;
  text-shadow: 0px 0px 3px rgba(86, 59, 206, 1);
`;

const LOGIN = styled.input`
  padding: 6px 8px;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  border: 1px solid rgba(0, 176, 200, 0.1);
  border-radius: 8px;
  font-family: "Scout", sans-serif;
  text-align: center;
  letter-spacing: 0px;
  text-decoration: none;
  color: #fff;
  filter: drop-shadow(0px 0px 5px rgba(0, 176, 200, 1));
  background: #fff;
  transition: filter 0.3s;
  text-shadow: 0px 0px 3px rgba(86, 59, 206, 1);
  cursor: pointer;

  &:hover {
    border: 1px solid rgba(86, 59, 206, 0.1);
    filter: drop-shadow(0px 0px 5px rgba(86, 59, 206, 1));
    background: #fff;
    transition: filter 0.3s;
    text-shadow: 0px 0px 3px rgba(0, 176, 200, 1);
  }
`;

const Hero = styled.div`
  background-image: url(${props => props.source});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  width: 100%;
  height: 500px;
  z-index: 1;
  text-align: center;
  color: #fff;
  z-index: 0;
  margin-bottom: 32px;
`;

const Closeup = styled(Img)`
  width: 100%;
  max-width: 500px;
  height: 500px;
  z-index: 1;
  text-align: center;
  color: #fff;
  z-index: 0;
  margin: 32px;

  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`;

const BW = styled.div`
  background-image: url(${props => props.source});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  width: 100%;
  height: 500px;
  z-index: 1;
  text-align: center;
  color: #fff;
  z-index: 0;
  margin-bottom: 32px;
`;

const P = styled.p`
  font-family: "Scout", sans-serif;
  color: #000;
  font-size: 22px;
  line-height: 22px;
  margin: 32px 16px;
`;

const Text = styled.div`
  width: 100%;
  padding: 0 32px;

  @media only screen and (min-width: 768px) {
    width: 50%;
    padding: 0;
  }
`;

const HR = styled.hr`
  width: 32px;
  margin-left: 32px;
  height: 2px;
`;

const OVERLAY = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(117, 190, 183, 0.5);
`;

const OVERLAYTOP = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(250, 195, 235, 0.5);
`;
