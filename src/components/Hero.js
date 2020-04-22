import React from "react"
import styled from "styled-components"

import sarah from "../images/me.png"

const Hero = () => (
  <>
    <IMG src={sarah} alt="Sarah Morash" />
    <TextContainer>
      <H2>Hey there, I'm</H2>
      <H1>sarah morash</H1>
    </TextContainer>
  </>
)

export default Hero

const H1 = styled.h1`
  font-family: "Hipster", cursive;
  background: -webkit-linear-gradient(
    0deg,
    rgba(0, 176, 200, 0.9),
    rgba(86, 59, 206, 0.9)
  );
  -webkit-font-smoothing: auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 100px;
  filter: drop-shadow(3px 3px 0 #000);
  padding-left: 32px;

  @media only screen and (min-width: 768px) {
    font-size: 132px;
  }
`

const H2 = styled.h2`
  font-family: "UnicaOne", sans-serif;
  -webkit-font-smoothing: auto;
  color: #000;
  font-size: 28px;
  line-height: 16px;
  letter-spacing: 0px;
  margin: 32px 0 0 0;
  text-transform: lowercase;
`

const IMG = styled.img`
  width: 100%;
  height: auto;
`

const TextContainer = styled.div`
  -webkit-font-smoothing: auto;
  padding-left: 32px;
  display: flex;
  flex-direction: column;
`
