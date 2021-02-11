import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

import SEO from "../components/seo";

import "../css/main.css";
import "../css/all.css";

const Dev = ({ data }) => {
  return (
    <>
      <SEO title="Dev" />
      <ImageEmbed
        href="https://www.freepik.com/vectors/coffee"
        target="_blank"
        rel="noopener noreferrer"
        title="Coffee vector created by upklyak - www.freepik.com"
      >
        <i class="fas fa-info-circle"></i>
      </ImageEmbed>
      <Hero fluid={data.heroImage.childImageSharp.fluid} />
      <Title>
        <Heading>All things dev</Heading>
      </Title>
      <DIV>
        <List>
          <INFO>
            {/* <Link>
              <LARGERCIRCLE />
            </Link>
            <P>TEST</P>
            <P>
              <small>TEST</small>
            </P>
            <P>
              <small>TEST</small>
            </P>
            <P>
              <small>TEST</small>
            </P> */}
          </INFO>
        </List>
      </DIV>
    </>
  );
};

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "dev/header.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Dev;

const ImageEmbed = styled.a`
  position: absolute;
  top: 550px;
  left: 90%;
  z-index: 100;
`;

const Hero = styled(Img)`
  width: 100%;
  height: 500px;
  margin-bottom: 32px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h1`
  font-family: "Hipster", cursive;
  color: #fff;
  font-size: 54px;
  filter: drop-shadow(1px 1px 2px #000);
  margin: 0;
  padding: 0 16px;
`;

const DIV = styled.div`
  margin: 100px 32px;
  max-width: 1440px;
`;

const INFO = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: none;
  width: 50%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const DIVROW = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  z-index: 10;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin: 32px auto;
    width: 100%;
  }
`;

const H3 = styled.h3`
  font-family: "Hipster", cursive;
  color: #fff;
  font-size: 52px;
  margin: 0;
  filter: drop-shadow(1px 1px 5px #00b0c8);
  text-shadow: 0px 0px 3px rgba(86, 59, 206, 0.9);

  @media only screen and (max-width: 768px) {
    margin: auto;
  }
`;

const IMG = styled(Img)`
  width: 50%;
  max-width: 500px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const P = styled.p`
  font-family: "Scout", sans-serif;
  letter-spacing: 1px;
  color: #000;
  font-size: 18px;
  line-height: 22px;
  margin: 0;

  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: 500px;
  }
`;

const Text = styled.div`
  width: 100%;
  padding: 32px;

  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`;

const A = styled.a`
  font-size: 24px;
  font-weight: bold;
  font-family: "Hipster", sans-serif;
  text-decoration: none;
  color: #fff;
  transition: filter 0.3s;
  text-shadow: 0px 0px 3px rgba(86,59,206,1);

  &:hover {
    transition: filter 0.3s;
    filter: drop-shadow(0px 0px 5px rgba(0,176,200,1));
  }
}`;

const HERO = styled(Img)`
  width: 100%;
  height: auto;
  max-height: 1440px;
  margin-bottom: 32px;
`;

const CIRCLE = styled(Img)`
  width: 100%;
  max-width: 200px;
  height: auto;
  margin: 16px;
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
`;

const LARGERCIRCLE = styled(Img)`
  width: 100%;
  max-width: 300px;
  height: 160px;
  margin: 16px;
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
`;

const Link = styled(A)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

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
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
`;
