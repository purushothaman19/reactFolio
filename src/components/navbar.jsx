import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Contact from "./contact";
import Home from "./Home";
import Project from "./Projects";
import ThemesPage from "./Themes";

function Navbar() {

  const h1 = {
    "color": "white"
  }

  return (
    <div>

      <div className="top">

        <h1 style={h1} className="title-name">Purushothaman</h1>

      </div>

      <Router>
        <div className="top-down">

          <nav className="navbar navbar-expand-lg navbar-light bg-light" id="top-navbar">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">

                <li className="nav-item">
                  <Link className="nav-link" to="/themes">Themes</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>

              </ul>
            </div>

          </nav>

        </div>

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/themes">
            <ThemesPage></ThemesPage>
          </Route>

          <Route path="/projects">
            <Project></Project>
          </Route>

          <Route path="/contact">
            <Contact/>
          </Route>
          
          <Route path="/projects:python">
            <Project></Project>
          </Route>

        </Switch>
      </Router>
    </div>

  );
}

export default Navbar;
