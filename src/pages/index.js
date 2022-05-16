import React from "react";
import styled from "styled-components";

import Hero from "../components/hero";
import SEO from "../components/seo";
import Info from "../components/info";
import LogoList from "../components/logolist";

import { brands } from "../assets/files/brands";

const IndexPage = () => {
  return (
    <>
      <SEO title='Home' />
      <Hero />
      {/* <Info /> */}
    </>
  );
};

export default IndexPage;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
