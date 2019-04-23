import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import work from '../assets/images/work.jpg'
import blog from '../assets/images/coffee.jpg'

const About = props => (
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

    <BannerLanding title="About Me" />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header>
            <h2>
              <pre>
                <code>
                  eat&nbsp;&nbsp;=>&nbsp;&nbsp;sleep&nbsp;&nbsp;=>&nbsp;&nbsp;code&nbsp;&nbsp;=>&nbsp;&nbsp;gym&nbsp;&nbsp;=>&nbsp;&nbsp;repeat
                </code>
              </pre>
            </h2>
            <p>
              My name is Sarah and I have been working in the technology
              industry for over 5 years.
            </p>
            <p>
              Born and raised in Halifax NS, I have lived here my whole life and
              have become an expert on most things Haligonian.
            </p>
            <p>
              I have been working on frontend technologies more recently, I this
              is my new focus! If you have job opportunities relating to
              frontend development, please pass them along!
            </p>
            <p>
              When I am not coding for work or fun, I enjoy living a healthy and
              active lifestyle. I go to the gym about 5 times per week, and am
              following a powerlifting/bodybuilding program. I hope one day to
              be strong enough to enter a powerlifting competition!
            </p>
          </header>
        </div>
      </section>
      <section id="two" className="tiles">
        <article style={{ backgroundImage: `url(${work})` }}>
          <header className="major">
            <h3>Work</h3>
            <p>
              I have been working for over five years in software development.
              Check out my resume and some of my past/current projects.
            </p>
          </header>
          <Link to="/work" className="link primary" />
        </article>
        <article style={{ backgroundImage: `url(${blog})` }}>
          <header className="major">
            <h3>Blog</h3>
            <p>
              I'll share my tips and tricks with fitness, health, coding,
              adulting, travelling adventures!
            </p>
          </header>
          <Link to="/blog" className="link primary" />
        </article>
      </section>
    </div>
  </Layout>
)

export default About
