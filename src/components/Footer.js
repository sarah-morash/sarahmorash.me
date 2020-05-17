import React from "react";
import styled from "styled-components";

import resume from "../assets/files/Resume_SarahMorash_2020.pdf";

const Footer = () => {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <StyledFooter>
      <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#00b0c8"
          fillOpacity="0.5"
          d="M0,160L34.3,176C68.6,192,137,224,206,213.3C274.3,203,343,149,411,117.3C480,85,549,75,617,96C685.7,117,754,171,823,165.3C891.4,160,960,96,1029,90.7C1097.1,85,1166,139,1234,170.7C1302.9,203,1371,213,1406,218.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </SVG>
      <LeftDiv>
        <Social
          href="https://twitter.com/sarah_morash"
          target="_blank"
          rel="noopener noreferrer"
          className="fab fa-twitter"
        />
        <Social
          href="https://www.instagram.com/sarah_morash/"
          target="_blank"
          rel="noopener noreferrer"
          className="fab fa-instagram"
        />
        <Social
          href="https://www.linkedin.com/in/sarahmorash/"
          target="_blank"
          rel="noopener noreferrer"
          className="fab fa-linkedin"
        />
        <Social
          href="https://github.com/sarah-morash"
          target="_blank"
          rel="noopener noreferrer"
          className="fab fa-github"
        />
      </LeftDiv>
      <SPAN className="fas fa-arrow-up" onClick={scrollToTop} />
      <RightDiv>
        <A href={resume} target="_blank">
          Resume
        </A>
      </RightDiv>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  position: sticky;
  max-width: 1440px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 200px;
`;

const LeftDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  height: 100px;
  margin: 0 32px;
`;

const RightDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 32px;
`;

const SVG = styled.svg`
  bottom: 0;
  position: absolute;
  width: 100%;
`;

const Social = styled.a`
  font-size: 32px;
  text-decoration: none;
  transition: filter 0.2s;
  color: #fff;
  filter: drop-shadow(0px 0px 3px rgba(0, 176, 200, 1));

  &:hover {
    transition: filter 0.2s;
    filter: drop-shadow(0px 0px 3px #276fb9);
  }
`;

const A = styled.a`
  padding: 6px 8px;
  font-size: 36px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 8px;
  font-family: "Hipster", sans-serif;
  text-align: center;
  letter-spacing: 0px;
  text-decoration: none;
  color: #fff;
  filter: drop-shadow(0px 0px 5px rgba(0, 176, 200, 1));
  background: #fff;
  transition: filter 0.3s;
  text-shadow: 0px 0px 3px rgba(86, 59, 206, 1);

  &:hover {
    filter: drop-shadow(0px 0px 5px rgba(86, 59, 206, 1));
    background: #fff;
    transition: filter 0.3s;
    text-shadow: 0px 0px 3px rgba(0, 176, 200, 1);
  }
`;

const SPAN = styled.span`
  margin-left: auto;
  margin-right: auto;
  font-size: 32px;
  color: #fff;
  z-index: 10;
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: translate(0px, -10px);
    filter: drop-shadow(0px 0px 3px #276fb9);
    transition: all 0.3s;
  }
`;
