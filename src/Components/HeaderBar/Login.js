import React, { useState } from "react";

// Libraries
import { Redirect } from "react-router-dom";
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
import { authLogin, authSetError } from "../../store/actions/auth";
import theme from "../../consts/theme";

// TODO add loading on all pages

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
function Login(props) {
  const { error, token, handleCloseDropdownlogin, handleClickOpensignup } =
    props;
  const [formData, setFormData] = useState({
    emailmobile: "",
    password: "",
    showPassword: false,
  });
  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleChange = (prop) => (event) => {
    setFormData({ ...formData, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  React.useEffect(() => {
    if (token) {
      props.setAuthSuccess("Logged in");
      handleCloseDropdownlogin();
    }
    if (error) {
      if (error.response && error.response.status === 404) {
        props.setError();
        handleCloseDropdownlogin();
        handleClickOpensignup(1, formData.emailmobile);
      } else {
        // TODO to print a network error
        console.log("Network Error");
      }
    }
    // HELP The below comment is to remove warning
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, error, formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { emailmobile, password } = formData;
    props.login(emailmobile, password);
  };

  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  const handleSignUp = (event) => {
    preventDefault(event);
    props.handleCloseDropdownlogin();
    props.handleClickOpensignup();
  };

  if (token) {
    return <Redirect to="/" />;
  }
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
            Welcome Back
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              error={error && error.response && true}
              helperText={
                error &&
                error.response &&
                "Incorrect Email/Mobile Number or Password"
              }
              id="emailmobile"
              label="Email or Mobile Number"
              name="emailmobile"
              autoComplete="emailmobile"
              autoFocus
              onChange={onChangeHandler}
              value={formData.emailmobile}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={formData.showPassword ? "text" : "password"}
              id="password"
              autoComplete="password"
              onChange={handleChange("password")}
              value={formData.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ backgroundColor: "#37b3f9", color: "#FFFFFF" }}
              className={classes.submit}
            >
              LogIn
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="" variant="body2" style={{ color: "#37b3f9" }}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href=""
                  onClick={handleSignUp}
                  variant="body2"
                  style={{ color: "#37b3f9" }}
                >
                  {"Don't have an account? Sign Up"}
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
    login: (emailmobile, password) =>
      dispatch(authLogin(emailmobile, password)),
    setError: () => dispatch(authSetError()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
