import React from "react";
import { Route } from "react-router-dom";

import HomePage from "../components/HomePage.js";
import Checkout from "../components/Checkout";
import CartPage from "../components/CartPage";
import ExploreProduct from "../components/ExploreProduct";
import Orders from "../components/Orders";
import MyAccount from "../components/MyAccount";

const BaseRouter = () => (
  <div>
    {/* For references on how to pass values */}
    {/* <Route path="/products/:productID" component={ProductDetail} /> */}

    <Route exact path="/checkout/*" component={Checkout} />
    <Route exact path="/cart" component={CartPage} />
    <Route exact path="/ExploreProduct" component={ExploreProduct} />
    <Route exact path="/myaccount/*" component={MyAccount} />
    <Route exact path="/myaccount" component={MyAccount} />
    <Route exact path="/orders" component={Orders} />
    <Route exact path="/" component={HomePage} />
    {/* <Route path="/*" component={HomePage} /> */}
  </div>
);

export default BaseRouter;
