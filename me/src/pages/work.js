import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import Slide from '../components/Slide'

import harbr from '../assets/images/harbr.png'
import tnb from '../assets/images/TNB.png'
import top from '../assets/images/TOP.png'
import mattamy from '../assets/images/MATTAMY.png'
import rogers from '../assets/images/ROGERS.png'
import nslc from '../assets/images/NSLC.png'
import wholesale from '../assets/images/WHOLESALE.png'

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
                            <Slide
                                title={"Tourism New Brunswick"}
                                image={tnb}
                                link={"https://www.tourismnewbrunswick.ca/"}
                            >
                                <p>Website redesign, support & maintenance (T4G, 2015)</p>
                                <span class="sitecore technology-identifier"></span>&nbsp;Sitecore
                                <span class="aspnet technology-identifier"></span>&nbsp;ASP.NET Webforms
                            </Slide>
                            <Slide
                                title={"Tourism Operator Portal"}
                                image={top}
                                link={"https://top.tourismnewbrunswick.ca/"}
                            >
                               <p>Website redesign, support & maintenance (T4G, 2016)</p>
                                <span class="sitecore technology-identifier"></span>&nbsp;Sitecore
                                <span class="aspnet technology-identifier"></span>&nbsp;ASP.NET MVC
                            </Slide>
                            <Slide
                                title={"Mattamy Homes"}
                                image={mattamy}
                                link={"https://mattamyhomes.com/"}
                            >
                                <p>Website redesign & re-platform, support & maintenance (T4G, 2016)</p>
                                <span class="sitecore technology-identifier"></span>&nbsp;Sitecore
                                <span class="aspnet technology-identifier"></span>&nbsp;ASP.NET MVC
                            </Slide>
                            <Slide
                                title={"Rogers Dealer Central"}
                                image={rogers}
                                link={"http://www.dealercentral.ca/"}
                            >
                                <p>Website redesign & re-platform (T4G, 2017)</p>
                                    <span class="kentico technology-identifier"></span>&nbsp;Kentico
                                    <span class="aspnet technology-identifier"></span>&nbsp;ASP.NET Webforms
                            </Slide>
                            <Slide
                                title={"Nova Scotia Liquor Corporation"}
                                image={nslc}
                                link={"https://www.mynslc.com/"}
                            >
                                <p>Support & maintenance (T4G, 2017)</p>
                                <span class="sitecore technology-identifier"></span>&nbsp;Sitecore
                                <span class="aspnet technology-identifier"></span>&nbsp;ASP.NET Webforms
                            </Slide>                           
                            <Slide
                                title={"MyNSLC Wholesale"}
                                image={wholesale}
                                link={"https://www.mynslcwholesale.com/"}
                            >
                                <p>Website build (T4G, 2018)</p>
                                <span class="sitecore technology-identifier"></span>&nbsp;Sitecore
                                <span class="aspnet technology-identifier"></span>&nbsp;ASP.NET Webforms
                            </Slide>                           
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </Layout>
)

export default Work