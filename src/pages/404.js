import React from "react";

import Layout from "../components/Layout";
import Head from "../components/Head";
import BannerLanding from "../components/BannerLanding";

const NotFoundPage = () => (
  <Layout>
    <Head title="404" />

    <BannerLanding title="Page Not Found" />

    <div id="main">
      <section id="one">
        <div className="inner">
          <section>
            <div className="inner">
              <p>Oh no! The page you are looking for does not exist.</p>
              <a className="button" href="/">
                Go to home
              </a>
            </div>
          </section>
        </div>
      </section>
    </div>
  </Layout>
);

export default NotFoundPage;
