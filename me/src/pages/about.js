import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import work from '../assets/images/work.jpg'
import blog from '../assets/images/coffee.jpg'


const About = (props) => (
    <Layout>
        <Helmet
            title="Sarah Morash"
            meta={[
                { name: 'description', content: 'Sarah Morash' },
                { name: 'keywords', content: 'portfolio, blog, personal, coding, technology' },
            ]}
        >
        </Helmet>

        <BannerLanding title="About Me" />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header>
                        <h2><pre><code>eat&nbsp;&nbsp;=>&nbsp;&nbsp;sleep&nbsp;&nbsp;=>&nbsp;&nbsp;code&nbsp;&nbsp;=>&nbsp;&nbsp;gym&nbsp;&nbsp;=>&nbsp;&nbsp;repeat</code></pre></h2>
                    </header>
                    <p>That is my daily mantra. But it wasn't always this way - I started out as a young student who always wanted to soar for the stars - whether that was getting the best grades possible (basically a straight A student all through school), being a part of as many extra-curricular activities as possible (yearbook editor, rugby, band, badminton, and prom committee to name a few).</p>
                    <p>I had many things I was passionate about - Math, Science, Music (loved to sing and play the flute/tuba). But I wasn't sure what I would always do with that. How could I combine my passions into a career?</p>
                    <p>Over the years, I've learned many things, but two things I've learned are:
                        <ul>
                            <li>You can combine your passions to provide you with a meaningful and enjoyable life.</li>
                            <li>Your passions will change over time.</li>
                        </ul>
                    </p>
                    <p>And that they did. I went from thinking I might be a music teacher, to realizing that my true calling was to be a programmer. I didn't have coding classes throughout my schooling, so the only coding exposure I had at the time was helping my teachers create their Websites using <a href="https://en.wikipedia.org/wiki/Microsoft_FrontPage">Microsoft Frontpage</a>, creating a <a href="https://www.urbandictionary.com/define.php?term=Piczo">Piczo</a> account.</p>
                    <p>So I decided that I could perhaps combine my passions and my love for technology into a career!</p>
                    <p>I went to Dalhousie University and graduated with a Bachelor of Computer Science, with a Minor in Mathematics, and also performed as an applied flute student within the Bachelor of Music.</p>
                    <p>I had 3 co-op jobs in university</p>
                </div>
            </section>
            <section id="two" className="tiles">
                <article style={{backgroundImage: `url(${work})`}}>
                    <header className="major">
                        <h3>Work</h3>
                        <p>I have been working for over five years in software development. Check out my resume and some of my past/current projects.</p>
                    </header>
                    <Link to="/work" className="link primary"></Link>
                </article>
                <article style={{backgroundImage: `url(${blog})`}}>
                    <header className="major">
                        <h3>Blog</h3>
                        <p>I'll share my tips and tricks with fitness, health, coding, adulting, travelling adventures!</p>
                    </header>
                    <Link to="/blog" className="link primary"></Link>
                </article>
            </section>
        </div>
    </Layout>
)

export default About