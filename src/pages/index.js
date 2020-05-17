import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import Hero from "../components/Hero";
import SEO from "../components/seo";
import Info from "../components/info";
import LogoList from "../components/logolist";

import { brands } from "../assets/files/brands";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Info />
      <Title>
        <Heading>Brands I've worked with</Heading>
      </Title>
      <LogoList list={brands} />
    </Layout>
  );
};

export default IndexPage;

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
