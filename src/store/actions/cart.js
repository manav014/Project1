import { CART_START, CART_SUCCESS, CART_FAIL } from "./actionTypes";
import axios from "axios";

import { cartDetailsURL } from "../../consts/constants";

export const cartStart = () => {
  return {
    type: CART_START,
  };
};

export const cartSuccess = (data) => {
  return {
    type: CART_SUCCESS,
    data,
  };
};

export const cartFail = (error) => {
  return {
    type: CART_FAIL,
    error: error,
  };
};

export const fetchCart = () => {
  return (dispatch) => {
    dispatch(cartStart());
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get(cartDetailsURL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(cartSuccess(res.data));
        })
        .catch((err) => {
          dispatch(cartFail(err));
        });
    }
  };
};
