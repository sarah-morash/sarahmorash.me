import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import Slide from '../components/Slide'

import harbr from '../assets/images/harbr.png'
import harbrweb from '../assets/images/harbrweb.png'
import tnb from '../assets/images/TNB.png'
import top from '../assets/images/TOP.png'
import mattamy from '../assets/images/MATTAMY.png'
import rogers from '../assets/images/ROGERS.png'
import nslc from '../assets/images/NSLC.png'
import wholesale from '../assets/images/WHOLESALE.png'

import sitecore from '../assets/images/sitecore.png'
import kentico from '../assets/images/kentico.png'
import redux from '../assets/images/redux.png'
import wordpress from '../assets/images/wordpress.png'
import graphql from '../assets/images/graphql.png'
import react from '../assets/images/react.png'
import sql from '../assets/images/sql.png'
import net from '../assets/images/net.png'

const Work = props => (
  <Layout>
    <Helmet
      title="Sarah Morash"
      meta={[
        { name: 'description', content: 'Sarah Morash' },
        {
          name: 'keywords',
          content: 'portfolio, blog, personal, coding, technology',
        },
      ]}
    />

    <BannerLanding title="Work" />

    <div id="main">
      <section id="one">
        <div className="inner">
          <blockquote>
            Great companies don’t hire skilled people and motivate them, they
            hire already motivated people and inspire them. People are either
            motivated or they are not. Unless you give motivated people
            something to believe in, something bigger than their job to work
            toward, they will motivate themselves to find a new job and you’ll
            be stuck with whoever’s left.
            <br />
            <br />- Simon Sinek
          </blockquote>
          <a className="button" href="../assets/files/resume.pdf">
            Download my resume
          </a>
        </div>
      </section>
      <section id="two">
        <div className="intro no-border">
          <h1>Current/Past Projects</h1>
        </div>
      </section>
      <h3 className="position">Harbr</h3>
      <section className="tiles">
        <Slide
          title={'Harbr Platform'}
          text={'Website redesign, support & maintenance (T4G, 2015)'}
          image={harbr}
          link={'https://platform.harbr.com/'}
        >
          <img src={react} class="icon" />
          <img src={redux} class="icon" />
          <img src={graphql} class="icon" />
        </Slide>
        <Slide
          title={'Harbr Website'}
          text={'Website redesign, support & maintenance (T4G, 2015)'}
          image={harbrweb}
          link={'https://www.harbr.com/'}
        >
          <img src={wordpress} class="icon" />
        </Slide>
      </section>
      <h3 className="position">T4G Limited</h3>
      <section className="tiles">
        <Slide
          title={'Tourism New Brunswick'}
          text={'Website redesign, support & maintenance (T4G, 2015)'}
          image={tnb}
          link={'https://www.tourismnewbrunswick.ca/'}
        >
          <img src={sitecore} class="icon" />
          <img src={net} class="icon" />
          <img src={sql} class="icon" />
        </Slide>
        <Slide
          title={'Tourism Operator Portal'}
          text={'Website redesign, support & maintenance (T4G, 2016)'}
          image={top}
          link={'https://top.tourismnewbrunswick.ca/'}
        >
          <img src={sitecore} class="icon" />
          <img src={net} class="icon" />
          <img src={sql} class="icon" />{' '}
        </Slide>
        <Slide
          title={'Mattamy Homes'}
          text={
            'Website redesign & re-platform, support & maintenance (T4G, 2016)'
          }
          image={mattamy}
          link={'https://mattamyhomes.com/'}
        >
          <img src={sitecore} class="icon" />
          <img src={net} class="icon" />
          <img src={sql} class="icon" />{' '}
        </Slide>
        <Slide
          title={'Rogers Dealer Central'}
          text={'Website redesign & re-platform (T4G, 2017)'}
          image={rogers}
          link={'http://www.dealercentral.ca/'}
        >
          <img src={kentico} class="icon" />
          <img src={net} class="icon" />
          <img src={sql} class="icon" />
        </Slide>
        <Slide
          title={'NS Liquor Corporation'}
          text={'Support & maintenance (T4G, 2017)'}
          image={nslc}
          link={'https://www.mynslc.com/'}
        >
          <img src={sitecore} class="icon" />
          <img src={net} class="icon" />
          <img src={sql} class="icon" />
        </Slide>
        <Slide
          title={'MyNSLC Wholesale'}
          text={'Website build (T4G, 2018)'}
          image={wholesale}
          link={'https://www.mynslcwholesale.com/'}
        >
          <img src={sitecore} class="icon" />
          <img src={net} class="icon" />
          <img src={sql} class="icon" />
        </Slide>
      </section>
    </div>
  </Layout>
)

export default Work
