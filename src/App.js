import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import HomePage from "./components/HomePage.js";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/" component={HomePage} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
