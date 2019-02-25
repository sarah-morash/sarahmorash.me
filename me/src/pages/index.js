import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import harbr from '../assets/images/harbr.jpg'
import headshot from '../assets/images/headshot.jpg'
import harbrChristmas from '../assets/images/harbr_christmas.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {
        return (
            <Layout>
                <Helmet
                    title="Sarah Morash"
                    meta={[
                        { name: 'description', content: 'Sarah Morash' },
                        { name: 'keywords', content: 'portfolio, blog, personal, coding, technology' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Welcome to my site!</h2>
                            </header>
                            <p>This is a personal project I created that has helped me achieve a few things:</p>
                            <ul>
                                <li>Share my story with the world</li>
                                <li>Show off my latest projects</li>
                                <li>Have a space to share my opinions on things, and teach others lessons I've learned along the way</li>
                                <li>Show my creativity</li>
                                <li>Have a space to work with some new technologies (this site is using Gatsby JS)</li>
                            </ul>
                        </div>
                    </section>
                    <section id="one" className="tiles">
                        <article /*style={{backgroundImage: `url(${harbr})`}}*/>
                            <header className="major">
                                <h3>About Me</h3>
                                <p>I went from being a girl who was very unconfident to being a women who had more confidence then she ever had before. I live in two very male dominated fields - programming and lifting.</p>
                            </header>
                            <Link to="/about" className="link primary"></Link>
                        </article>
                        <article /*style={{backgroundImage: `url(${headshot})`}}*/>
                            <header className="major">
                                <h3>Work</h3>
                                <p>I have been working for over five years in software development. Check out my resume and some of my past/current projects.</p>
                            </header>
                            <Link to="/work" className="link primary"></Link>
                        </article>
                        <article /*style={{backgroundImage: `url(${harbrChristmas})`}}*/>
                            <header className="major">
                                <h3>Blog</h3>
                                <p>I'll share my tips and tricks with fitness, health, coding, adulting, travelling adventures!</p>
                            </header>
                            <Link to="/blog" className="link primary"></Link>
                        </article>
                        <article /*style={{backgroundImage: `url(${pic04})`}}*/>
                            <header className="major">
                                <h3>Contact</h3>
                                <p>Want to get in touch? Email my regarding speaking/outreach opportunities, freelance work, and sponsorship.</p>
                            </header>
                            <Link to="/contact" className="link primary"></Link>
                        </article>
                    </section>
                </div>
            </Layout>
        )
    }
}

export default HomeIndex