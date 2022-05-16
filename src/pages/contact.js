import React from "react";
import { graphql } from "gatsby";

import "../css/main.css";
import "../css/all.css";

const Contact = ({ data }) => {
  return (
    <div class='overflow-x-auto'>
      <table class='table w-full'>
        <thead>
          <tr>
            <th>Movement</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Squat</td>
            <td>215#</td>
          </tr>
          <tr>
            <td>Bench Press</td>
            <td>135#</td>
          </tr>
          <tr>
            <td>Deadlift</td>
            <td>265#</td>
          </tr>
          <tr>
            <td>Strict Press</td>
            <td>95#</td>
          </tr>
          <tr>
            <td>Snatch</td>
            <td>115#</td>
          </tr>
          <tr>
            <td>Clean & Jerk</td>
            <td>145#</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "dev/header.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Contact;
