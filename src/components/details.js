import React from "react";
import styled from "styled-components";

import Layout from "./layout";
import SEO from "./seo";

const Details = () => (
  <Layout>
    <SEO title="Wedding" />
    <DIV></DIV>
    <MAP>
      <div
        id="mymap-display"
        style={{ height: "100%", width: "100%", maxWidth: "100%" }}
      >
        <iframe
          title="Wedding MaP"
          style={{ height: "100%", width: "100%", border: "0" }}
          frameborder="0"
          src="https://www.google.com/maps/embed/v1/place?q=old+orchard+inn&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        ></iframe>
      </div>
    </MAP>
  </Layout>
);

export default Details;

const DIV = styled.div`
  margin: 100px 0;
  -webkit-font-smoothing: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const MAP = styled.div`
  max-width: 100%;
  overflow: hidden;
  color: red;
  width: 1400px;
  height: 300px;
`;
