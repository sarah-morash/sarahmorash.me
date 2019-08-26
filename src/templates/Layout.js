import React, { useState, useEffect } from "react";

import Header from "../components/Nav";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

import "../assets/scss/main.scss";

const Layout = ({ children }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [loading, setLoading] = useState("is-loading");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading("");
    }, 1000);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <div className={`body ${loading} ${menuVisible ? "is-menu-visible" : ""}`}>
      <div id="wrapper">
        <Header onToggleMenu={() => setMenuVisible(!menuVisible)} />
        {children}
        <Footer />
      </div>
      <Menu onToggleMenu={() => setMenuVisible(!menuVisible)} />
    </div>
  );
};

export default Layout;
