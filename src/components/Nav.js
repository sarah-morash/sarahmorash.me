import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Nav = props => (
  <header id="header" className="alt">
    <Link to="/" className="logo">
      <strong>Sarah</strong> <span>Morash</span>
    </Link>
    <nav>
      <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">
        Menu
      </a>
    </nav>
  </header>
);

Nav.propTypes = {
  onToggleMenu: PropTypes.func
};

export default Nav;
