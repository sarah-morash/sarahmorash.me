import React from "react";
import initials from "../assets/images/website-icon.png";

/**
 * Footer
 * Global footer showing social icons and copyright info
 */
const Footer = () => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/sarah_morash"
            target="_blank"
            rel="noopener noreferrer"
            className="icon alt fa-twitter"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/sarah_morash/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon alt fa-instagram"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/sarahmorash/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon alt fa-linkedin"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/sarah-morash"
            target="_blank"
            rel="noopener noreferrer"
            className="icon alt fa-github"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://teespring.com/stores/smorewear"
            target="_blank"
            rel="noopener noreferrer"
            className="icon alt fa-teespring"
          >
            <span className="label">teespring</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <button
          onClick={() => {
            window.scroll({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          <img src={initials} className="image icon" alt="SM" />
        </button>
      </ul>
    </div>
  </footer>
);

export default Footer;
