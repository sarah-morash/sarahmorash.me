import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import TileList from "../components/tilelist";
import { projects } from "../assets/files/projects";

const Work = ({ data }) => {
  return (
    <Layout>
      <SEO title="Work" />
      <HERO fluid={data.heroImage.childImageSharp.fluid} />
      <TITLE>
        <H2>Examples of my work</H2>
        <SPAN className="fas fa-laptop-code" />
      </TITLE>
      <DIV>
        <TileList list={projects} />
      </DIV>
    </Layout>
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

const DIV = styled.div`
  margin-bottom: 150px;
`;

const TITLE = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const H2 = styled.h1`
  font-family: "Hipster", cursive;
  color: #fff;
  font-size: 54px;
  filter: drop-shadow(1px 1px 2px #000);
  margin: 0;
  padding: 0 16px;
`;

const SPAN = styled.span`
  font-size: 32px;
  color: #563bce;
  opacity: 0.5;
`;

const HERO = styled(Img)`
  width: 100%;
  height: 500px;
  margin-bottom: 32px;
`;
