import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import Header from "./header";
import Footer from "./Footer";

import "../css/all.min.css";
import "../css/main.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle>
        <Header siteTitle={data.site.siteMetadata.title} />
        <DIV>
          <main>{children}</main>
          <Footer></Footer>
        </DIV>
      </GlobalStyle>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

const DIV = styled.div`
  margin: 0 auto;
  max-width: 1440px;
`;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Hipster";
    src: url("../fonts/Sweet-Hipster.ttf") format("truetype");
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "Scout";
    src: url("../fonts/scoutl.ttf") format("truetype");
    font-weight: 300;
    font-style: normal;
  }

  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  ::selection {
    background: #f3df95;
  }
  ::-moz-selection {
    background: #f3df95;
  }
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
