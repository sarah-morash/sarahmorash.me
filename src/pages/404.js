import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import cx from "classnames";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <SEO title="404" />
      <HERO fluid={data.hero.childImageSharp.fluid} alt="Hero image" />
      <Title>
        <Heading>404</Heading>
        <Icon className={cx("fas", "fa-exclamation-triangle")} />
      </Title>
      <Intro>
        <CIRCLE
          fluid={data.tuba.childImageSharp.fluid}
          alt="Tuba Sarah"
          title="Tuba Sarah"
        />
        <P>Womp, womp... Looks like this page can't be found.</P>
        <P>Fun fact: I used to play tuba in high school!</P>
      </Intro>
    </Layout>
  );
};

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "not-found/hero.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tuba: file(relativePath: { eq: "not-found/tuba.png" }) {
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
  height: 500px;
  margin-bottom: 50px;
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

const P = styled.p`
  font-family: "Scout", sans-serif;
  text-transform: lowercase;
  color: #000;
  font-size: 22px;
  line-height: 22px;
  margin: 0;

  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: 500px;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h1`
  font-family: "Scout", cursive;
  color: #fff;
  font-size: 100px;
  filter: drop-shadow(1px 1px 2px #000);
  margin: 0;
  padding: 0 16px;
`;

const Icon = styled.span`
  font-size: 32px;
  color: #563bce;
  opacity: 0.5;
`;
