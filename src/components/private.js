import React, { Component } from "react"
import { navigate } from "gatsby"
import { isLoggedIn } from "../services/auth"

const Private = ({ component: Component, location, ...rest }) => {
  if (!isLoggedIn() && location.pathname !== `/andkg`) {
    navigate("/andkg")
    return null
  }
  return <Component {...rest} />
}

export default Private
