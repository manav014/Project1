import axios from "axios";
import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const authLogin = (emailmobile, password) => async (dispatch) => {
  dispatch(authStart());
  await axios
    .post("http://127.0.0.1:8000/accounts/login/", {
      userid: emailmobile,
      pass: password,
    })
    .then((res) => {
      const token = res.data.access;
      console.log(res.status);
      //   TODO change the time from 3600 ti anything else
      const expirationDate = new Date(new Date().getTime() + 172800 * 1000);
      localStorage.setItem("token", token);
      localStorage.setItem("expirationDate", expirationDate);
      dispatch(authSuccess(token));
      dispatch(checkAuthTimeout(172800));
    })
    .catch((err) => {
      dispatch(authFail(err));
    });
};

export const authSignup = (
  username,
  email,
  password,
  mobileno,
  firstname,
  lastname
) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post("http://127.0.0.1:8000/accounts/register/", {
        userid: username,
        email_address: email,
        pass: password,
        fname: firstname,
        lname: lastname,
        mobile: mobileno,
      })
      .then((res) => {
        const token = res.data.access;

        const expirationDate = new Date(new Date().getTime() + 172800 * 1000);
        localStorage.setItem("token", token);
        localStorage.setItem("expirationDate", expirationDate);
        dispatch(authSuccess(token));
        dispatch(checkAuthTimeout(172800));
      })
      .catch((err) => {
        dispatch(authFail(err));
      });
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (token === undefined) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};