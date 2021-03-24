import React from "react";
import Gallery from "../../page/Gallery";
import Home from "../../page/Home";
import Login from "../../page/Login";
import SignUp from "../../page/Signup";

const routes = [
  {
    path: "/",
    exact: true,
    component: () => <Home />,
    protected: "none",
  },
  {
    path: "/gallery",
    exact: true,
    component: () => <Gallery />,
    protected: "auth",
  },
  {
    path: "/login",
    exact: true,
    component: () => <Login />,
    protected: "guest",
  },
  {
    path: "/signup",
    exact: true,
    component: () => <SignUp />,
    protected: "guest",
  },
];

export default routes;
