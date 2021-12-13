import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

// pages
import Home from "./Pages/Home/Home";
import SimpleScreen from "./Pages/SimpleScreen/SimpleScreen";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/simple">Simple Screen</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact component={Home} path="/" />
            <Route exact component={SimpleScreen} path="/simple" />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
