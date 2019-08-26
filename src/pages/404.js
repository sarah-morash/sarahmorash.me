import React from "react";

import Layout from "../templates/Layout";
import Head from "../components/Head";
import Banner from "../components/Banner";

const NotFoundPage = () => (
  <Layout>
    <Head title="404" />

    <Banner title="Page Not Found" />

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
