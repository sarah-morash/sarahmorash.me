import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = ({ data }) => (
  <Layout>
    <SEO title="404" />
    <HERO fluid={data.heroImage.childImageSharp.fluid} alt="collage" />
    <Intro>
      <CIRCLE
        fluid={data.me.childImageSharp.fluid}
        alt="Animated me"
        title="Animated me"
      />
    </Intro>
  </Layout>
);

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "about/collage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default NotFoundPage;

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
