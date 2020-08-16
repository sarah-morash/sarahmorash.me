import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

const About = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" />
      <HERO fluid={data.heroImage.childImageSharp.fluid} alt="collage" />
      <Intro>
        <CIRCLE
          fluid={data.me.childImageSharp.fluid}
          alt="Animated me"
          title="Animated me"
        />
        <P>
          Hey, my name is Sarah Morash and I have been a software developer for
          over 6 years now. I have been fortunate to work for companies such
          as&nbsp;
          <A href="https://www.t4g.com/" target="_blank">
            T4G
          </A>
          ,&nbsp;
          <A href="https://www.harbr.com/" target="_blank">
            Harbr
          </A>
          , & currently&nbsp;
          <A href="https://www.redspace.com/" target="_blank">
            REDspace
          </A>
          . I started as a backend CMS developer primarily working with
          Sitecore, but I've switched gears to my true passion of frontend
          development.
        </P>
        <P>
          In my spare time, I am creating for the web, creating art at home, and
          working on getting stronger (mentally & physically). My fiancé is also
          a web developer. Check out his profile&nbsp;
          <A href="https://ohearonkg.dev/" target="_blank">
            HERE
          </A>
          . Yes, we are a coding couple 👩‍💻❤️👨‍💻
        </P>
      </Intro>
      <DIV>
        <DIVROW>
          <IMG
            fluid={data.grad.childImageSharp.fluid}
            alt="DAL Grad"
            title="DAL Grad"
          />
          <Text>
            <H3>DAL Grad</H3>
            <P>
              I took a Bachelor of Computer Science from Dalhousie University,
              with a minor in Mathematics & a focus in Music. Learn more about
              the CS program&nbsp;
              <A href="https://cs.dal.ca" target="_blank">
                HERE
              </A>
              .
            </P>
          </Text>
        </DIVROW>

        <DIVROW>
          <Text>
            <H3>WiTS</H3>
            <P>
              For many years I was on the exec for the Women in Technology
              Society (WiTS). The focus was for women and other underrepresented
              groups to feel welcome in CS, and in the broader tech industry.
              Learn more about the society&nbsp;
              <A href="https://wits.cs.dal.ca/" target="_blank">
                HERE
              </A>
              .
            </P>
          </Text>
          <IMG
            fluid={data.wits.childImageSharp.fluid}
            alt="WITS"
            title="WITS"
          />
        </DIVROW>

        <DIVROW>
          <IMG
            fluid={data.clc.childImageSharp.fluid}
            alt="Canada Learning Code"
            title="Canada Learning Code"
          />
          <Text>
            <H3>Canada Learning Code</H3>
            <P>
              I volunteer as a mentor for Canada Learning Code. This teaches
              kids, adults, and teachers alike coding fundamentals, with a
              variety of different topics, like game making, website creation,
              design, data visualization, and more. Learn more about the
              program&nbsp;
              <A href="https://www.canadalearningcode.ca/" target="_blank">
                HERE
              </A>
              .
            </P>
          </Text>
        </DIVROW>
      </DIV>
      <DIV>
        <Title>
          <H3>Conferences I've attended</H3>
        </Title>
        <List>
          <INFO>
            <Link href="https://cloud.withgoogle.com/next/sf/">
              <LARGERCIRCLE
                fluid={data.gn.childImageSharp.fluid}
                alt="Google Next"
                title="Google Next"
              />
            </Link>
            <P>Google Next</P>
            <P>
              <small>April 9-11, 2019</small>
            </P>
            <P>
              <small>San Fransisco, California</small>
            </P>
            <P>
              <small>Theme: All about the latest with Google Cloud</small>
            </P>
          </INFO>
          <INFO>
            <Link href="https://fitc.ca/event/webu20/banners/">
              <LARGERCIRCLE
                fluid={data.wu.childImageSharp.fluid}
                alt="Web Unleashed"
                title="Web Unleashed"
              />
            </Link>
            <P>Web Unleashed</P>
            <P>
              <small>September 13-14, 2019</small>
            </P>
            <P>
              <small>Toronto, Ontario</small>
            </P>
            <P>
              <small>Theme: All about the latest with the web</small>
            </P>
          </INFO>
          <INFO>
            <Link href="https://ghc.anitab.org/">
              <LARGERCIRCLE
                fluid={data.ghc14.childImageSharp.fluid}
                alt="Grace Hopper 2014"
                title="Grace Hopper 2014"
              />
            </Link>
            <P>Grace Hopper Conference 2014</P>
            <P>
              <small>October 8-10, 2014</small>
            </P>
            <P>
              <small>Phoenix, Arizona</small>
            </P>
            <P>
              <small>Theme: Everywhere. Everyone.</small>
            </P>
          </INFO>
          <INFO>
            <Link href="https://ghc.anitab.org/">
              <LARGERCIRCLE
                fluid={data.ghc15.childImageSharp.fluid}
                alt="Grace Hopper 2015"
                title="Grace Hopper 2015"
              />
            </Link>
            <P>Grace Hopper Conference 2015</P>
            <P>
              <small>October 14-16, 2015</small>
            </P>
            <P>
              <small>Houston, Texas</small>
            </P>
            <P>
              <small>Theme: Our Time to Lead</small>
            </P>
          </INFO>
        </List>
      </DIV>
    </Layout>
  );
};

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "about/collage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wits: file(relativePath: { eq: "about/wits.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    grad: file(relativePath: { eq: "about/grad.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    clc: file(relativePath: { eq: "about/clc.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    me: file(relativePath: { eq: "about/animate-me.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wu: file(relativePath: { eq: "about/wu.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    gn: file(relativePath: { eq: "about/gn.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ghc14: file(relativePath: { eq: "about/ghc14.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ghc15: file(relativePath: { eq: "about/ghc15.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default About;

const DIV = styled.div`
  margin: 100px 32px;
  max-width: 1440px;
`;

const INFO = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: none;
  width: 50%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const DIVROW = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  z-index: 10;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin: 32px auto;
    width: 100%;
  }
`;

const H3 = styled.h3`
  font-family: "Hipster", cursive;
  color: #fff;
  font-size: 52px;
  margin: 0;
  filter: drop-shadow(1px 1px 5px #00b0c8);
  text-shadow: 0px 0px 3px rgba(86, 59, 206, 0.9);

  @media only screen and (max-width: 768px) {
    margin: auto;
  }
`;

const IMG = styled(Img)`
  width: 50%;
  max-width: 500px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const P = styled.p`
  font-family: "Scout", sans-serif;
  letter-spacing: 1px;
  color: #000;
  font-size: 18px;
  line-height: 22px;
  margin: 0;

  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: 500px;
  }
`;

const Text = styled.div`
  width: 100%;
  padding: 32px;

  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`;

const A = styled.a`
  font-size: 24px;
  font-weight: bold;
  font-family: "Hipster", sans-serif;
  text-decoration: none;
  color: #fff;
  transition: filter 0.3s;
  text-shadow: 0px 0px 3px rgba(86,59,206,1);

  &:hover {
    transition: filter 0.3s;
    filter: drop-shadow(0px 0px 5px rgba(0,176,200,1));
  }
}`;

const HERO = styled(Img)`
  width: 100%;
  height: auto;
  max-height: 1440px;
  margin-bottom: 32px;
`;

const CIRCLE = styled(Img)`
  width: 100%;
  max-width: 200px;
  height: auto;
  margin: 16px;
  border: 5px solid;
  border-image: linear-gradient(
      to right,
      #000025 20%,
      #f3df95 20%,
      #ff8cab 40%,
      #563bce 60%,
      #00b0c8 80%,
      #000025 80%
    )
    30;
`;

const LARGERCIRCLE = styled(Img)`
  width: 100%;
  max-width: 300px;
  height: 160px;
  margin: 16px;
  border: 5px solid;
  border-image: linear-gradient(
      to right,
      #000025 20%,
      #f3df95 20%,
      #ff8cab 40%,
      #563bce 60%,
      #00b0c8 80%,
      #000025 80%
    )
    30;
`;

const Link = styled(A)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }

  p {
    margin: 0 16px;
  }
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
