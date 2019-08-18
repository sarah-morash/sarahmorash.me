import Helmet from "react-helmet";
import PropTypes from "prop-types";

const Head = ({title, description, keywords, socialTitle, socialLink, socialDescription}) => (
  <Helmet>
    {/* Google Tag Manager */}
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-141718999-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-141718999-1');
    </script>

    <script>
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NTPZ74F');
    </script>
    
    <title>{title} | Sarah Morash</title>
    <meta
      name="description"
      content={description}
    />
    <meta
      name="keywords"
      content=`portfolio, blog, personal, coding, technology, ${keywords}`
    />
    <meta property="og:title" content={socialTitle} />
    <meta property="og:url" content={socialLink} />
    <meta name="twitter:title" content={socialTitle} />
    <meta
      name="twitter:description"
      content={socialDescription}
    />
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
