import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

const Head = ({
  title,
  description,
  keywords,
  socialTitle,
  socialLink,
  socialDescription
}) => (
  <Helmet>
    <title>{title} | Sarah Morash</title>
    <meta name="description" content={description} />
    <meta
      name="keywords"
      content={`portfolio, blog, personal, coding, technology, ${keywords}`}
    />
    <meta property="og:title" content={socialTitle} />
    <meta property="og:url" content={socialLink} />
    <meta name="twitter:title" content={socialTitle} />
    <meta name="twitter:description" content={socialDescription} />
  </Helmet>
);

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  socialTitle: PropTypes.string,
  socialLink: PropTypes.string,
  socialDescription: PropTypes.string
};

Head.defaultProps = {
  title: "",
  description: "A portfolio & blog created by Sarah Morash (smore)",
  keywords: "",
  socialTitle: "Posts from Smore",
  socialLink: "https://www.sarahmorash.me",
  socialDescription: "A portfolio & blog created by Sarah Morash (smore)"
};

export default Head;
