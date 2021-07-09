import axios from "axios";
import * as actionTypes from "./actionTypes";
import { authLoginURL, registerLoginURL } from "../../consts/constants";

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

export const authSetError = () => {
  return {
    type: actionTypes.AUTH_REMOVE_ERROR,
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

export const authLogin = (emailmobile, password) => (dispatch) => {
  dispatch(authStart());
  axios
    .post(authLoginURL, {
      userid: emailmobile,
      pass: password,
    })
    .then((res) => {
      const token = res.data.access;
      //   TODO change the time from 3600 to anything else
      const expirationDate = new Date(new Date().getTime() + 172800 * 1000);
      localStorage.setItem("token", token);
      localStorage.setItem("expirationDate", expirationDate);
      dispatch(authSuccess(token));
      dispatch(checkAuthTimeout(172800));
    })
    .catch((err) => {
      if (err.response) {
        dispatch(authFail(err));
      } else if (err.request) {
        dispatch(authFail(err));
      }
    });
};

export const authSignup = (email, firstname, lastname, mobileno, password) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post(registerLoginURL, {
        email_address: email,
        pass: password,
        fname: firstname,
        lname: lastname,
        mobile: mobileno,
      })
      .then((res) => {
        const token = res.data.access;
        //   TODO change the time from 3600 to anything else

        const expirationDate = new Date(new Date().getTime() + 172800 * 1000);
        localStorage.setItem("token", token);
        localStorage.setItem("expirationDate", expirationDate);
        dispatch(authSuccess(token));
        dispatch(checkAuthTimeout(172800));
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response) {
          dispatch(authFail(err));
        } else if (err.request) {
          dispatch(authFail(err));
        }
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
