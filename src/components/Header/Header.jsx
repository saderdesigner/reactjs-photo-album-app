import { Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { NavLink } from "react-router-dom";

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
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid container justify="space-between">
            <Grid item>
              <Grid container justify="flex-start" spacing={2}>
                <Grid item>
                  <NavLink to="/" className={classes.link}>
                    <Typography variant="h6">Home</Typography>
                  </NavLink>
                </Grid>
                <Grid item>
                  <NavLink to="/gallery" className={classes.link}>
                    <Typography variant="h6">Gallery</Typography>
                  </NavLink>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <NavLink to="/login" className={classes.link}>
                <Typography variant="h6">Login</Typography>
              </NavLink>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
