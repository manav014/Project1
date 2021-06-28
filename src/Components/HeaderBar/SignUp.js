import React, { useState, useEffect } from "react";

// Libraries

import { connect } from "react-redux";

// @material-ui components
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { ThemeProvider } from "@material-ui/core/styles";

// local components
import { authSignup } from "../../store/actions/auth";
import theme from "../../consts/theme";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(4),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignUp(props) {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  const { error, token } = props;

  const [formData, setFormData] = useState({
    email: "",
    firstname: "",
    lastname: "",
    mobileno: "",
    password: "",
    confirmpassword: "",
    confirmed: true,
    showPassword: false,
    showConfirmPassword: false,
  });
  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickShowPassword = (pass) => {
    setFormData({ ...formData, [pass]: !formData[pass] });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const confirmPasswordOnChangeHandler = (e) => {
    let confirmed = false;
    if (e.target.value === formData.password) {
      confirmed = true;
    } else {
      confirmed = false;
    }
    setFormData({
      ...formData,
      confirmed: confirmed,
      [e.target.name]: e.target.value,
    });
  };
  const passwordOnChangeHandler = (e) => {
    let confirmed = false;
    if (e.target.value === formData.confirmpassword) {
      confirmed = true;
    } else {
      confirmed = false;
    }
    setFormData({
      ...formData,
      confirmed: confirmed,
      [e.target.name]: e.target.value,
    });
  };
  const mobileOnChangeHandler = (e) => {
    if (e.target.value.length >= 11 || isNaN(e.target.value.slice(-1))) {
      setFormData({
        ...formData,
        [e.target.name]: formData.mobileno,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  useEffect(() => {
    if (token) {
      props.setAuthSuccess("Signed up");
      props.handleCloseDropdownsignup();
    }
    if (props.emailMobile) {
      if (props.emailMobile.indexOf("@") !== -1) {
        setFormData({
          ...formData,
          email: props.emailMobile,
        });
      }
      props.setemailMobile(null);
    }
    // HELP The below comment is to remove warning
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, props.emailMobile]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, firstname, lastname, mobileno, password } = formData;
    props.signup(email, firstname, lastname, mobileno, password);
  };
  const handleSignIn = (event) => {
    preventDefault(event);
    props.handleCloseDropdownsignup();
    props.handleClickOpenlogin();
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar
            className={classes.avatar}
            style={{ backgroundColor: "#37b3f9" }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstname"
                  variant="outlined"
                  required
                  value={formData.firstname}
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={onChangeHandler}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  value={formData.lastname}
                  id="lastname"
                  label="Last Name"
                  name="lastname"
                  autoComplete="lastname"
                  onChange={onChangeHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  type="email"
                  error={error && true}
                  helperText={error && "Email Alreday Exists"}
                  value={formData.email}
                  id="email"
                  inputProps={{
                    pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
                  }}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={onChangeHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  type="tel"
                  required
                  fullWidth
                  error={error && true}
                  helperText={error && "Mobile Number Alreday Exists"}
                  value={formData.mobileno}
                  id="mobileno"
                  inputProps={{
                    pattern: "[1-9]{1}[0-9]{9}",
                  }}
                  label="Contact No"
                  name="mobileno"
                  autoComplete="mno"
                  onChange={mobileOnChangeHandler}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="password"
                  name="password"
                  variant="outlined"
                  error={!formData.confirmed}
                  helperText={
                    !formData.confirmed && "Both passwords should be the same"
                  }
                  // inputProps={{
                  //   pattern:
                  //     "^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$",
                  // }}
                  required
                  value={formData.password}
                  fullWidth
                  type={formData.showPassword ? "text" : "password"}
                  id="password"
                  label="Password"
                  autoFocus
                  onChange={passwordOnChangeHandler}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() =>
                            handleClickShowPassword("showPassword")
                          }
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {formData.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  error={!formData.confirmed && true}
                  type={formData.showConfirmPassword ? "text" : "password"}
                  value={formData.confirmpassword}
                  id="confirmpassword"
                  label="Confirm Password"
                  name="confirmpassword"
                  autoComplete="confirmpassword"
                  onChange={confirmPasswordOnChangeHandler}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() =>
                            handleClickShowPassword("showConfirmPassword")
                          }
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {formData.showConfirmPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ backgroundColor: "#37b3f9", color: "#FFFFFF" }}
              className={classes.submit}
              disabled={!formData.confirmed || formData.password === ""}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link
                  href="#"
                  variant="body2"
                  onClick={handleSignIn}
                  style={{ color: "#37b3f9" }}
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    token: state.auth.token,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signup: (email, firstname, lastname, mobileno, password) =>
      dispatch(authSignup(email, firstname, lastname, mobileno, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
