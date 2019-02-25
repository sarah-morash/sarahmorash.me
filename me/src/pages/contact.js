import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import ContactForm from '../components/ContactForm'
import BannerLanding from '../components/BannerLanding'

const Contact = (props) => (
    <Layout>
        <Helmet
            title="Sarah Morash"
            meta={[
                { name: 'description', content: 'Sarah Morash' },
                { name: 'keywords', content: 'portfolio, blog, personal, coding, technology' },
            ]}
        >
        </Helmet>

        <BannerLanding title="Contact" subtitle="Looking for a speaker, influencer, volunteer, freelancer? I'm open to requests, and based on my schedule/fit I will try to make it work! Send me a message, and I'll respond as soon as I can :)" />

        <div id="main" className="alt">
            <ContactForm />
        </div>
    </Layout>
)

export default Contact