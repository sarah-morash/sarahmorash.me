import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

/**
 * Menu
 * Creates the menu component featuring all main navigation links
 */
const Menu = ({ onToggleMenu }) => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link className="button special fit" onClick={onToggleMenu} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={onToggleMenu} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link onClick={onToggleMenu} to="/work">
            Work
          </Link>
        </li>
        <li>
          <Link onClick={onToggleMenu} to="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link className="button fit" onClick={onToggleMenu} to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
    <a className="close" onClick={onToggleMenu} href="#">
      Close
    </a>
  </nav>
);

Menu.propTypes = {
  onToggleMenu: PropTypes.func
};

export default Menu;
