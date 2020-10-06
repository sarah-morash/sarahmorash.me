import React from "react";
import Layout from "./src/components/Layout";

// allow a plugin to wrap the page element
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
