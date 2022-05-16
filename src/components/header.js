import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const Header = () => (
  <div class='navbar shadow-lg bg-neutral-focus text-neutral-content rounded-box'>
    <div class='px-2 mx-2 navbar-start'>
      <Link to='/' style={{ textDecoration: "none" }}>
        <SPAN>sm</SPAN>
      </Link>
    </div>
    <div class='px-2 mx-2 navbar-end lg:flex'>
      <div class='flex items-stretch'>
        <a class='btn btn-ghost btn-sm rounded-btn' href='/about'>
          About
        </a>
        <a class='btn btn-ghost btn-sm rounded-btn' href='/dev'>
          Dev
        </a>
        <a class='btn btn-ghost btn-sm rounded-btn' href='/contact'>
          Contact
        </a>
      </div>
    </div>
  </div>
);

export default Header;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 12px 0px 12px 32px;
  max-width: 1440px;

  /* border-bottom: 3px solid;
  border-image: linear-gradient(
      to right,
      #f3df95 20%,
      #ff8cab 40%,
      #00b0c8 60%,
      #563bce 80%
    )
    30; */
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
  /* filter: drop-shadow(2px 1px 0px #000); */

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
  /* margin: 0 16px; */
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
