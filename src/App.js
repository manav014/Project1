import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import HomePage from "./components/HomePage.js";
import Address from "./components/CheckoutAddress.js";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/address" component={Address} />
          <Route exact path="/" component={HomePage} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
