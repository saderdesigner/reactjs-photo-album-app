import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import firebase from "./config/firebase";
import NotFound from "./page/NotFound";
import AppContext from "./store/AppContext";
import AuthRoute from "./utils/routes/AuthRoute";
import GuessRoute from "./utils/routes/GuessRoute";
import routes from "./utils/routes/index";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUser(user);
        // console.log("AppUser: ", user);
        setIsLoading(false);
      } else {
        setUser({});
        setIsLoggedIn(false);
        setIsLoading(false);
      }
    });
  }, []);

  if (isLoading) return <Loading />;

  return (
    <Router>
      <AppContext.Provider value={[isLoggedIn, user]}>
        <Header />
        <Switch>
          {routes.map((route, index) => {
            if (route.protected === "guest") {
              return (
                <GuessRoute
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                  key={index}
                />
              );
            }

            if (route.protected === "auth") {
              return (
                <AuthRoute
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                  key={index}
                />
              );
            }

            return (
              <Route
                path={route.path}
                exact={route.exact}
                component={route.component}
                key={index}
              />
            );
          })}

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
