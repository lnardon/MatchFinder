import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./app.css";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
