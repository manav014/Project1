import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import authReducer from "./store/reducers/auth";
import cartReducer from "./store/reducers/cart";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});
const store = createStore(rootReducer, composeEnhances(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
registerServiceWorker();
