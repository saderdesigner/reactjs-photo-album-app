import { CircularProgress } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import MaterialLink from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import firebase from "../config/firebase";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <MaterialLink color="inherit" href="https://github.com/saderdesigner">
        ReactJS Photo Album App
      </MaterialLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: { email: "", password: "", passwordConfirm: "" },
    onSubmit: (value, formikBag) => {
      //   console.log("Formik: ", value);
      setIsLoading(true);
      firebase
        .auth()
        .createUserWithEmailAndPassword(value.email, value.password)
        .then((res) => {
          setIsLoading(false);
          history.replace("/");
        })
        .catch((e) => {
          setIsLoading(false);
          formikBag.setFieldError("email", e.message);
        });
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email is required!")
        .email("Invalid email address!"),
      password: Yup.string()
        .required("Password is required!")
        .min(6, "Password must be at least 6 characters"),
      passwordConfirm: Yup.string()
        .required("Password confirm is required!")
        .oneOf([Yup.ref("password"), null], "Password does't match"),
    }),
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>

        <form
          className={classes.form}
          noValidate
          onSubmit={formik.handleSubmit}
        >
          {/*<FormControl component="fieldset" error={error !== ""}>
            <FormHelperText>{error}</FormHelperText>
  </FormControl>*/}

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            {...formik.getFieldProps("email")}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            {...formik.getFieldProps("password")}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password Confirm"
            type="password"
            id="passwordConfirm"
            autoComplete="current-password"
            {...formik.getFieldProps("passwordConfirm")}
            error={
              formik.touched.passwordConfirm &&
              Boolean(formik.errors.passwordConfirm)
            }
            helperText={
              formik.touched.passwordConfirm && formik.errors.passwordConfirm
            }
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={isLoading}
          >
            {isLoading ? (
              <CircularProgress size={24} color="primary" />
            ) : (
              "Sign Up"
            )}
          </Button>

          <Grid container justify="center">
            <Grid item>
              <Link to="/login" variant="body2">
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
