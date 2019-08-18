import React from "react";

import Head from "../components/Head";
import Layout from "../components/Layout";
import BannerLanding from "../components/BannerLanding";

const Contact = props => (
  <Layout>
    <Head title="Contact" />

    <BannerLanding title="Contact" subtitle="" />

    <div id="main contact">
      <section className="contact">
        <p>
          Looking for a speaker, influencer, volunteer, freelancer? I'm open to
          requests, and based on my schedule/fit I will try to make it work!
          Send me a message, and I'll respond as soon as I can :)
        </p>
        <a className="button" href="mailto:sarahjmorash@gmail.com">
          Send me an email!
        </a>
      </section>
    </div>
  </Layout>
);

export default Contact;
