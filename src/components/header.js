import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const Header = () => (
  <StyledHeader>
    <Link to="/" style={{ textDecoration: "none" }}>
      <SPAN>sm</SPAN>
    </Link>
    <DIV>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/work">Work</StyledLink>
      <StyledLink to="/andkg">+KG</StyledLink>
    </DIV>
  </StyledHeader>
);

export default Header;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 12px 0px 12px 32px;
  max-width: 1440px;
  border-bottom: 5px solid;
  border-image: linear-gradient(
      to right,
      #f3df95 20%,
      #ff8cab 40%,
      #00b0c8 60%,
      #563bce 80%
    )
    30;
`;

const DIV = styled.div`
  height: 100%;
  padding-right: 32px;
`;

const SPAN = styled.span`
  font-family: "Hipster", cursive;
  background: -webkit-linear-gradient(
    180deg,
    rgba(0, 176, 200, 0.9),
    rgba(86, 59, 206, 0.9)
  );
  padding: 6px;
  -webkit-font-smoothing: auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 72px;
  filter: drop-shadow(2px 1px 0px #000);

  &:hover {
    background: -webkit-linear-gradient(
      180deg,
      rgba(86, 59, 206, 0.9),
      rgba(0, 176, 200, 0.9)
    );
    -webkit-font-smoothing: auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const StyledLink = styled(Link)`
  font-family: "UnicaOne", sans-serif;
  text-transform: lowercase;
  color: #000;
  font-size: 22px;
  line-height: 60px;
  letter-spacing: 0px;
  margin: 32px 16px;
  text-decoration: none;
  -webkit-font-smoothing: auto;
  transition: all 0.3s;
  text-shadow: 2px 2px #f3df95;

  &:hover {
    color: #fff;
    transition: all 0.2s;
    text-shadow: 2px 2px #ff8cab;
    filter: drop-shadow(1px 1px 5px #00b0c8);
  }
`;
