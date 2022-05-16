import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import resume from "../assets/files/Resume_SarahMorash_2020.pdf";

const Footer = () => {
  return (
    <>
      <footer class='p-10 footer bg-neutral-focus text-neutral-content'>
        <div>
          <Link to='/' style={{ textDecoration: "none" }}>
            <SPAN>sm</SPAN>
          </Link>
        </div>
        <div>
          <span class='footer-title'>Sarah Morash</span>
          <a
            class='link link-hover hover:no-underline hover:opacity-50'
            href='/about'
          >
            About
          </a>
          <a
            class='link link-hover hover:no-underline hover:opacity-50'
            href='/projects'
          >
            Projects
          </a>
          <a
            class='link link-hover hover:no-underline hover:opacity-50'
            href='/dev'
          >
            Dev
          </a>
          <a
            class='link link-hover hover:no-underline hover:opacity-50'
            href='/fitness'
          >
            Fitness
          </a>
          <a
            class='link link-hover hover:no-underline hover:opacity-50'
            href='/contact'
          >
            Contact
          </a>
          <a
            class='link link-hover hover:no-underline hover:opacity-50'
            href={resume}
            target='_blank'
          >
            Resume
          </a>
        </div>
        <div>
          <span class='footer-title'>Social</span>
          <div class='grid grid-flow-col gap-4'>
            <a
              href='https://twitter.com/sarah_morash'
              target='_blank'
              rel='noopener noreferrer'
              className='fab fa-twitter text-xl hover:opacity-50'
            />
            <a
              href='https://www.instagram.com/sarah_morash/'
              target='_blank'
              rel='noopener noreferrer'
              className='fab fa-instagram text-xl hover:opacity-50'
            />
            <a
              href='https://www.linkedin.com/in/sarahmorash/'
              target='_blank'
              rel='noopener noreferrer'
              className='fab fa-linkedin text-xl hover:opacity-50'
            />
            <a
              href='https://github.com/sarah-morash'
              target='_blank'
              rel='noopener noreferrer'
              className='fab fa-github text-xl hover:opacity-50'
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

// const Social = styled.a`
//   font-size: 32px;
//   text-decoration: none;
//   transition: filter 0.2s;
//   color: #fff;
//   filter: drop-shadow(0px 0px 3px rgba(0, 176, 200, 1));

//   &:hover {
//     transition: filter 0.2s;
//     filter: drop-shadow(0px 0px 3px #276fb9);
//   }
// `;

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
