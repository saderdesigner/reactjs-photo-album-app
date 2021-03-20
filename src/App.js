import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import routes from "./utils/routes";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {routes.map((route, index) => (
          <Route
            path={route.path}
            exact={route.exact}
            component={route.component}
            key={index}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
