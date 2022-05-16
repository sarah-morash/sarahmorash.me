import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

import SEO from "../components/seo";

const About = ({ data }) => {
  return (
    <>
      <SEO title='About' />
      <Img fluid={data.heroImage.childImageSharp.fluid} alt='collage' />
      <div className='flex'>
        <Img
          fluid={data.me.childImageSharp.fluid}
          alt='Animated me'
          title='Animated me'
          className='w-32'
        />
        <p>
          Hey, my name is Sarah Morash and I have been a software developer for
          over 6 years now. I have been fortunate to work for companies such
          as&nbsp;
          <a
            href='https://www.t4g.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            T4G
          </a>
          ,&nbsp;
          <a
            href='https://www.harbr.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Harbr
          </a>
          , & currently&nbsp;
          <a
            href='https://www.redspace.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            REDspace
          </a>
          . I started as a backend CMS developer primarily working with
          Sitecore, but I've switched gears to my true passion of frontend
          development.
        </p>
        <p>
          In my spare time, I am creating for the web, creating art at home, and
          working on getting stronger (mentally & physically). My fiancé is also
          a web developer. Check out his profile&nbsp;
          <a
            href='https://ohearonkg.dev/'
            target='_blank'
            rel='noopener noreferrer'
          >
            HERE
          </a>
          . Yes, we are a coding couple 👩‍💻❤️👨‍💻
        </p>
      </div>
      <div className='flex'>
        <div>
          <Img
            fluid={data.grad.childImageSharp.fluid}
            alt='DAL Grad'
            title='DAL Grad'
            className='w-64'
          />
          <div>
            <h3>DAL Grad</h3>
            <p>
              I took a Bachelor of Computer Science from Dalhousie University,
              with a minor in Mathematics & a focus in Music. Learn more about
              the CS program&nbsp;
              <a
                href='https://cs.dal.ca'
                target='_blank'
                rel='noopener noreferrer'
              >
                HERE
              </a>
              .
            </p>
          </div>
        </div>

        <div className='flex'>
          <div>
            <h3>WiTS</h3>
            <p>
              For many years I was on the exec for the Women in Technology
              Society (WiTS). The focus was for women and other underrepresented
              groups to feel welcome in CS, and in the broader tech industry.
              Learn more about the society&nbsp;
              <a
                href='https://wits.cs.dal.ca/'
                target='_blank'
                rel='noopener noreferrer'
              >
                HERE
              </a>
              .
            </p>
          </div>
          <Img
            fluid={data.wits.childImageSharp.fluid}
            alt='WITS'
            title='WITS'
            className='w-64'
          />
        </div>

        <div className='flex'>
          <Img
            fluid={data.clc.childImageSharp.fluid}
            alt='Canada Learning Code'
            title='Canada Learning Code'
            className='w-64'
          />
          <div>
            <h3>Canada Learning Code</h3>
            <p>
              I volunteer as a mentor for Canada Learning Code. This teaches
              kids, adults, and teachers alike coding fundamentals, with a
              variety of different topics, like game making, website creation,
              design, data visualization, and more. Learn more about the
              program&nbsp;
              <a href='https://www.canadalearningcode.ca/' target='_blank'>
                HERE
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <div className='flex'>
        <div>
          <h3>Conferences I've attended</h3>
        </div>
        <div>
          <div>
            <a href='https://cloud.withgoogle.com/next/sf/'>
              <Img
                fluid={data.gn.childImageSharp.fluid}
                alt='Google Next'
                title='Google Next'
                className='w-64'
              />
            </a>
            <p>Google Next</p>
            <p>
              <small>April 9-11, 2019</small>
            </p>
            <p>
              <small>San Fransisco, California</small>
            </p>
            <p>
              <small>Theme: All about the latest with Google Cloud</small>
            </p>
          </div>
          <div>
            <Link href='https://fitc.ca/event/webu20/banners/'>
              <Img
                fluid={data.wu.childImageSharp.fluid}
                alt='Web Unleashed'
                title='Web Unleashed'
                className='w-64'
              />
            </Link>
            <p>Web Unleashed</p>
            <p>
              <small>September 13-14, 2019</small>
            </p>
            <p>
              <small>Toronto, Ontario</small>
            </p>
            <p>
              <small>Theme: All about the latest with the web</small>
            </p>
          </div>
          <div>
            <Link href='https://ghc.anitab.org/'>
              <Img
                fluid={data.ghc14.childImageSharp.fluid}
                alt='Grace Hopper 2014'
                title='Grace Hopper 2014'
                className='w-64'
              />
            </Link>
            <p>Grace Hopper Conference 2014</p>
            <p>
              <small>October 8-10, 2014</small>
            </p>
            <p>
              <small>phoenix, Arizona</small>
            </p>
            <p>
              <small>Theme: Everywhere. Everyone.</small>
            </p>
          </div>
          <div>
            <a href='https://ghc.anitab.org/'>
              <Img
                fluid={data.ghc15.childImageSharp.fluid}
                alt='Grace Hopper 2015'
                title='Grace Hopper 2015'
                className='w-64'
              />
            </a>
            <p>Grace Hopper Conference 2015</p>
            <p>
              <small>October 14-16, 2015</small>
            </p>
            <p>
              <small>Houston, Texas</small>
            </p>
            <p>
              <small>Theme: Our Time to Lead</small>
            </p>
          </div>
        </div>
      </div>
    </>
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
