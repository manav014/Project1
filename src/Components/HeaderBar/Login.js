import React, { useState } from "react";
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
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { authLogin } from "../../store/actions/auth";

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
  const { error, loading, token } = props;
  const [formData, setFormData] = useState({
    emailmobile: "",
    password: "",
  });
  const { emailmobile, password } = formData;

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  React.useEffect(() => {
    if (props.token) {
      props.handleCloseDropdownlogin();
    }
    if (props.error) {
      if (props.error.response.status === 404) {
        props.handleCloseDropdownlogin();
        props.handleClickOpensignup();
      }
    }
  }, [token, error]);

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
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            error={error && true}
            helperText={error && "Incorrect Email/Mobile Number or Password"}
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
            type="password"
            id="password"
            autoComplete="password"
            onChange={onChangeHandler}
            value={formData.password}
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
