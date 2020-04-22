import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TileList from "../components/tilelist"
import { projects } from "../files/projects"

import work from "../images/work/work.jpg"

const Work = () => {
  return (
    <Layout>
      <SEO title="Work" />
      <HERO src={work} alt="work" />
      <TITLE>
        <H2>Examples of my work</H2>
        <SPAN className="fas fa-laptop-code" />
      </TITLE>
      <DIV>
        <TileList list={projects} />
      </DIV>
      {/* <TITLE>
        <H2>Some of my projects</H2>
        <SPAN className="fas fa-laptop-code" />
      </TITLE> */}
    </Layout>
  )
}

export default Work

const DIV = styled.div`
  margin-bottom: 150px;
  ${"" /* margin-bottom: 150px; */}
`

const TITLE = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const H2 = styled.h1`
  font-family: "Hipster", cursive;
  color: #fff;
  font-size: 54px;
  filter: drop-shadow(1px 1px 2px #000);
  margin: 0;
  padding: 0 16px;
`

const SPAN = styled.span`
  font-size: 32px;
  color: #563bce;
  opacity: 0.5;
`

const HERO = styled.div`
  background-image: url(${work});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  width: 100%;
  height: 500px;
  margin-bottom: 32px;
`
