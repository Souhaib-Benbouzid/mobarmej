import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.scss";

import HomePage from "./pages/homepage/home.page";
import Projects from "./pages/projects/projects.page";
import About from "./pages/about/about.page";

import Header from "./sections/header/header.component";
import Footer from "./sections/footer/footer.component";
import Contact from "./sections/contact/contact.section";

function App() {
  return (
    <div className="App">
      <div className="test"></div>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
