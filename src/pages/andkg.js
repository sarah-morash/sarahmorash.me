import React from "react"
import { Router } from "@reach/router"

import Details from "../components/details"
import Login from "../components/login"
import Private from "../components/private"

const Wedding = () => (
  <Router>
    <Private path="/andkg/details" component={Details} />
    <Login path="/andkg" />
  </Router>
)

export default Wedding
