import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

import SEO from "../components/seo";
import LogoList from "../components/logolist";
import TileList from "../components/tilelist";

import { projects } from "../assets/files/projects";
import { companies } from "../assets/files/companies";

import "../css/main.css";
import "../css/all.css";

const Work = ({ data }) => {
  return (
    <>
      <SEO title="Work" />
      <Hero fluid={data.heroImage.childImageSharp.fluid} />
      <Title>
        <Heading>Companies I've worked for</Heading>
      </Title>
      <LogoList list={companies} />
      <Title>
        <Heading>Examples of my work</Heading>
      </Title>
      <TileList list={projects} />
    </>
  );
};

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "work/work.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Work;

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

const Span = styled.span`
  font-size: 32px;
  color: #563bce;
  opacity: 0.5;
  margin: 0 32px;
  cursor: pointer;

  &:hover {
    transform: translate(0px, 10px);
    transition: transform 0.3s;
  }
`;

const Note = styled.h3`
  font-family: "Hipster", cursive;
  font-size: 32px;
  color: #000;
  margin-left: auto;
  margin-right: 24px;
  text-align: center;
  width: 100px;
  position: absolute;
  right: 0;
  z-index: 100;
`;
