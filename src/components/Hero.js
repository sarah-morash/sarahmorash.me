import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import photo from "../assets/images/cb_selfie.jpg";

const Hero = () => {
  const { heroImage, bitmojiMe } = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "cb_selfie.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bitmojiMe: file(relativePath: { eq: "bitmojiMe.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div
      class='hero min-h-screen'
      style={{
        backgroundImage: `url(${photo})`,
        height: "600px",
        maxHeight: "60vh"
      }}
    >
      <div class='hero-overlay bg-opacity-30'></div>
      <div class='text-right hero-content text-neutral-content w-full h-full justify-end items-end'>
        <div class='max-w-md'>
          <h1 class='mb-5 text-4xl font-bold'>Hello World</h1>
          <p class='mb-5'>
            My name is Sarah Morash and I am a Senior Software Developer in
            Halifax, NS.
          </p>
          <a href='/about'>
            <button class='btn btn-primary'>Learn More</button>
          </a>
        </div>
      </div>
    </div>
  );
};

const H1 = styled.h1`
  font-family: "Hipster", cursive;
  background: -webkit-linear-gradient(
    0deg,
    rgba(0, 176, 200, 0.9),
    rgba(86, 59, 206, 0.9)
  );
  -webkit-font-smoothing: auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 100px;
  filter: drop-shadow(3px 3px 0 #000);
  padding-left: 32px;

  @media only screen and (min-width: 768px) {
    font-size: 132px;
  }
`;

const H2 = styled.h2`
  font-family: "Scout", sans-serif;
  -webkit-font-smoothing: auto;
  color: #000;
  font-size: 20px;
  line-height: 16px;
  letter-spacing: 0px;
  margin: 32px 0 0 0;
  text-transform: uppercase;
`;

const TextContainer = styled.div`
  -webkit-font-smoothing: auto;
  padding-left: 32px;
  display: flex;
  flex-direction: column;
`;

const Bitmoji = styled(Img)`
  height: 145px;
  width: 119px;
  margin: 30px;

  @media only screen and (max-width: 768px) {
    height: 100px;
    width: 82px;
    margin: 30px 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default Hero;
