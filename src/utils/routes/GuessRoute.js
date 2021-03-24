import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import AppContext from "../../store/AppContext";

export default function GuessRoute(props) {
  const [isLoggedIn] = useContext(AppContext);

  if (!isLoggedIn) return <Route {...props} />;

  return <Redirect to="/" />;
}
