import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import HomePage from "./components/HomePage.js";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <Redirect from="*" to="/" /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
