import React from "react";

import Layout from "../components/layout";
import Hero from "../components/Hero";
import SEO from "../components/seo";
import Info from "../components/info";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Info />
    </Layout>
  );
};

export default IndexPage;
