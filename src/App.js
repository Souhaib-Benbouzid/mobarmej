import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

import HomePage from "./pages/homepage/home.page";
import Header from "./sections/header/header.component";
import Footer from "./sections/footer/footer.component";

function App() {
  return (
    <div className="App">
      <div className="test"></div>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
