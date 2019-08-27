import redspace from "../images/redspace.png";
import harbr from "../images/platform.png";
import harbrweb from "../images/harbrweb.png";
import tnb from "../images/TNB.png";
import top from "../images/TOP.png";
import mattamy from "../images/MATTAMY.png";
import rogers from "../images/ROGERS.png";
import nslc from "../images/NSLC.png";
import wholesale from "../images/WHOLESALE.png";

import sitecore from "../images/sitecore.png";
import kentico from "../images/kentico.png";
import redux from "../images/redux.png";
import wordpress from "../images/wordpress.png";
import graphql from "../images/graphql.png";
import react from "../images/react.png";
import sql from "../images/sql.png";
import net from "../images/net.png";

const projects = [
  {
    position: "REDspace (2019 +)",
    title: "BR/Live",
    text: "Feature creation/optimization & maintenance",
    image: redspace,
    link: "https://live.bleacherreport.com/",
    technologies: [
      {
        name: "React",
        image: react
      },
      {
        name: "Redux",
        image: redux
      }
    ]
  },
  {
    position: "Harbr (2018 - 2019)",
    title: "Harbr Platform & Mobile",
    text: "Feature creation & maintenance",
    image: harbr,
    link: "https://platform.harbr.com/",
    technologies: [
      {
        name: "React",
        image: react
      },
      {
        name: "Redux",
        image: redux
      },
      {
        name: "GraphQL",
        image: graphql
      }
    ]
  },
  {
    position: "Harbr (2018 - 2019)",
    title: "Harbr Website",
    text: "Multiple redesigns to support rebranding & maintenance",
    image: harbrweb,
    link: "https://www.harbr.com/",
    technologies: [
      {
        name: "WordPress",
        image: wordpress
      }
    ]
  },
  {
    position: "T4G Limited (2014 - 2018)",
    title: "Tourism New Brunswick",
    text: "Website redesign, support & maintenance",
    image: tnb,
    link: "https://www.tourismnewbrunswick.ca/",
    technologies: [
      {
        name: "Sitecore",
        image: sitecore
      },
      {
        name: ".NET",
        image: net
      },
      { name: "SQL", image: sql }
    ]
  },
  {
    position: "T4G Limited (2014 - 2018)",
    title: "Tourism Operator Portal",
    text: "Website redesign, support & maintenance",
    image: top,
    link: "https://top.tourismnewbrunswick.ca/",
    technologies: [
      {
        name: "Sitecore",
        image: sitecore
      },
      {
        name: ".NET",
        image: net
      },
      { name: "SQL", image: sql }
    ]
  },
  {
    position: "T4G Limited (2014 - 2018)",
    title: "Mattamy Homes",
    text: "Website redesign & re-platform, support & maintenance",
    image: mattamy,
    link: "https://mattamyhomes.com/",
    technologies: [
      {
        name: "Sitecore",
        image: sitecore
      },
      {
        name: ".NET",
        image: net
      },
      { name: "SQL", image: sql }
    ]
  },
  {
    position: "T4G Limited (2014 - 2018)",
    title: "Rogers Dealer Central",
    text: "Website redesign & re-platform, support & maintenance",
    image: rogers,
    link: "http://www.dealercentral.ca/",
    technologies: [
      {
        name: "Kentico",
        image: kentico
      },
      {
        name: ".NET",
        image: net
      },
      { name: "SQL", image: sql }
    ]
  },
  {
    position: "T4G Limited (2014 - 2018)",
    title: "NS Liquor Corporation",
    text: "Support & maintenance",
    image: nslc,
    link: "https://www.mynslc.com/",
    technologies: [
      {
        name: "Sitecore",
        image: sitecore
      },
      {
        name: ".NET",
        image: net
      },
      { name: "SQL", image: sql }
    ]
  },
  {
    position: "T4G Limited (2014 - 2018)",
    title: "MyNSLC Wholesale",
    text: "Website build",
    image: wholesale,
    link: "https://www.mynslcwholesale.com/",
    technologies: [
      {
        name: "Sitecore",
        image: sitecore
      },
      {
        name: ".NET",
        image: net
      },
      { name: "SQL", image: sql }
    ]
  }
];

export default projects;
