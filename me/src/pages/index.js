import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import about from '../assets/images/about.png'
import work from '../assets/images/work.jpg'
import blog from '../assets/images/coffee.jpg'
import contact from '../assets/images/contact.jpg'
import welcome from '../assets/images/hi.png'

class HomeIndex extends React.Component {
  render() {
    return (
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

        <Banner />

        <div id="main">
          <section id="two">
            <div className="intro">
              <div>
                <h2>Welcome to my site!</h2>
                <p>
                  This is a personal project I created that has helped me
                  achieve a few things:
                </p>
                <ul>
                  <li>Share my story with the world</li>
                  <li>Show off my latest projects</li>
                  <li>
                    Have a space to share my opinions on things, and teach
                    others lessons I've learned along the way
                  </li>
                  <li>Show my creativity</li>
                  <li>
                    Have a space to work with some new technologies (this site
                    is using Gatsby JS)
                  </li>
                </ul>
              </div>
              <div>
                <img src={welcome} alt="hi" />
              </div>
            </div>
          </section>
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${about})` }}>
              <header className="major">
                <h3>About Me</h3>
                <p>
                  I live in two very male dominated fields - programming and
                  lifting. Learn more about my personal journey here.
                </p>
              </header>
              <Link to="/about" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${work})` }}>
              <header className="major">
                <h3>Work</h3>
                <p>
                  I have been working for over five years in software
                  development. Check out my resume and some of my past/current
                  projects.
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
            <article style={{ backgroundImage: `url(${contact})` }}>
              <header className="major">
                <h3>Contact</h3>
                <p>
                  Want to get in touch? Email me regarding speaking/outreach
                  opportunities, freelance work, or just to say hi :)
                </p>
              </header>
              <Link to="/contact" className="link primary" />
            </article>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
