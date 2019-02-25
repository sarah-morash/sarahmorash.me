import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import harbr from '../assets/images/harbr.png'

const Work = (props) => (
    <Layout>
        <Helmet
            title="Sarah Morash"
            meta={[
                { name: 'description', content: 'Sarah Morash' },
                { name: 'keywords', content: 'portfolio, blog, personal, coding, technology' },
            ]}
        >
        </Helmet>
        
        <BannerLanding title="Work" />

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <blockquote>Great companies don’t hire skilled people and motivate them, they hire already motivated people and inspire them. People are either motivated or they are not. Unless you give motivated people something to believe in, something bigger than their job to work toward, they will motivate themselves to find a new job and you’ll be stuck with whoever’s left.<br /><br />- Simon Sinek</blockquote>
                        </div>
                        <div className="col-6">
                            <h3>Harbr Inc.</h3>
                            <div className="box">
                                <div style={{display: 'flex'}}>
                                    <div style={{textAlign: 'left'}}>Halifax, NS</div>
                                    <div style={{textAlign: 'right'}}>(October 2018 - Present)</div>
                                </div>
                                <b>Software Engineer</b>
                                <ul>
                                    <li>Javascript (React & React Native), CSS</li>
                                    <li>CSS</li>
                                    <li>GraphQL, Redux, Apollo</li>
                                    <li>CircleCI, GIT</li>
                                    <li>GCP/AWS</li>
                                    <li>Co-op Student Mentor; Co-op Interview Conductor</li>
                                </ul>
                            </div>
                            <img src={harbr} className="image preview" alt="Harbr" />
                            <h3>T4G Limited</h3>
                            <div className="box">
                                <b>Solutions Developer</b>
                                <p>Halifax, NS (August 2014 - September 2018)</p>
                            </div>
                        </div>
                        <div class="wrapper">
                            <div class="tile-container">
                                <a href="https://www.tourismnewbrunswick.ca/" target="_blank">
                                    <span>
                                        <img src="dist/images/TNB.png" />
                                    </span>
                                </a>
                                <div class="tile-description">
                                    <p>
                                        <strong>Tourism New Brunswick</strong>
                                    </p>
                                    <p>Website redesign, support & maintenance (T4G, 2015)</p>
                                    <span class="sitecore technology-identifier"></span>&nbsp;Sitecore
                                    <span class="aspnet technology-identifier"></span>&nbsp;ASP.NET Webforms
                                </div>
                            </div>
                            <div class="tile-container">
                                <a href="https://top.tourismnewbrunswick.ca/" target="_blank">
                                    <span>
                                        <img src="dist/images/TOP.png" />
                                    </span>
                                </a>
                                <div class="tile-description">
                                    <p>
                                        <strong>Tourism Operator Portal</strong>
                                    </p>
                                    <p>Website redesign, support & maintenance (T4G, 2016)</p>
                                    <span class="sitecore technology-identifier"></span>&nbsp;Sitecore
                                    <span class="aspnet technology-identifier"></span>&nbsp;ASP.NET MVC
                                </div>
                            </div>
                            <div class="tile-container">
                                <a href="https://mattamyhomes.com/" target="_blank">
                                    <span>
                                        <img src="dist/images/Mattamy.png" />
                                    </span>
                                </a>
                                <div class="tile-description">
                                    <p>
                                        <strong>Mattamy Homes</strong>
                                    </p>
                                    <p>Website redesign & re-platform, support & maintenance (T4G, 2016)</p>
                                    <span class="sitecore technology-identifier"></span>&nbsp;Sitecore
                                    <span class="aspnet technology-identifier"></span>&nbsp;ASP.NET MVC
                                </div>
                            </div>
                            <div class="tile-container">
                                <a href="http://www.dealercentral.ca/" target="_blank">
                                    <span>
                                        <img src="dist/images/ROGERS.png" />
                                    </span>
                                </a>
                                <div class="tile-description">
                                    <p>
                                        <strong>Rogers Dealer Central</strong>
                                    </p>
                                    <p>Website redesign & re-platform (T4G, 2017)</p>
                                    <span class="kentico technology-identifier"></span>&nbsp;Kentico
                                    <span class="aspnet technology-identifier"></span>&nbsp;ASP.NET Webforms
                                </div>
                            </div>
                            <div class="tile-container">
                                <a href="https://www.mynslc.com/" target="_blank">
                                    <span>
                                        <img src="dist/images/NSLC.png" />
                                    </span>
                                </a>
                                <div class="tile-description">
                                    <p>
                                        <strong>Nova Scotia Liquor Corporation</strong>
                                    </p>
                                    <p>Support & maintenance (T4G, 2017)</p>
                                    <span class="sitecore technology-identifier"></span>&nbsp;Sitecore
                                    <span class="aspnet technology-identifier"></span>&nbsp;ASP.NET Webforms
                                </div>
                            </div>
                            <div class="tile-container">
                                <a href="https://www.mynslcwholesale.com/" target="_blank">
                                    <span>
                                        <img src="dist/images/Wholesale.png" />
                                    </span>
                                </a>
                                <div class="tile-description">
                                    <p>
                                        <strong>MyNSLC Wholesale</strong>
                                    </p>
                                    <p>Website build (T4G, 2018)</p>
                                    <span class="sitecore technology-identifier"></span>&nbsp;Sitecore
                                    <span class="aspnet technology-identifier"></span>&nbsp;ASP.NET Webforms
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </Layout>
)

export default Work