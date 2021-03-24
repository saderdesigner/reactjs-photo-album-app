import { Button, Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import firebase from "../../config/firebase";
import AppContext from "../../store/AppContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  linkActive: {
    textDecoration: "underline",
  },
}));

export default function Header() {
  const classes = useStyles();

  const history = useHistory();
  const [isLoggedIn, user] = useContext(AppContext);

  function logout() {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        history.push("/login");
      })
      .catch((e) => {
        console.log(e.message);
      });
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid container justify="space-between">
            <Grid item>
              <Grid container justify="flex-start" spacing={2}>
                <Grid item>
                  <NavLink
                    exact
                    to="/"
                    className={classes.link}
                    activeClassName={classes.linkActive}
                  >
                    <Typography variant="h6">Home</Typography>
                  </NavLink>
                </Grid>
                <Grid item>
                  <NavLink
                    to="/gallery"
                    className={classes.link}
                    activeClassName={classes.linkActive}
                  >
                    <Typography variant="h6">Gallery</Typography>
                  </NavLink>
                </Grid>
              </Grid>
            </Grid>

            {isLoggedIn ? (
              <Grid item>
                <Button variant="outlined" color="secondary" onClick={logout}>
                  Log Out
                </Button>
              </Grid>
            ) : (
              <Grid item>
                <Grid container justify="space-between" spacing={2}>
                  <Grid item>
                    <NavLink
                      to="/login"
                      className={classes.link}
                      activeClassName={classes.linkActive}
                    >
                      <Typography variant="h6">Login</Typography>
                    </NavLink>
                  </Grid>
                  <Grid item>
                    <NavLink
                      to="/signup"
                      className={classes.link}
                      activeClassName={classes.linkActive}
                    >
                      <Typography variant="h6">Sign Up</Typography>
                    </NavLink>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
