import React from "react";
import { Route } from "react-router-dom";

import HomePage from "../Components/HomePage.js";
import Checkout from "../Components/Checkout";
import CartPage from "../Components/CartPage";
import ExploreProduct from "../Components/ExploreProduct";
import Orders from "../Components/Orders";
import MyAccount from "../Components/MyAccount";
import SingleProduct from "../Components/SingleProduct";

const BaseRouter = () => (
  <div>
    {/* For references on how to pass values */}
    {/* <Route path="/products/:productID" component={ProductDetail} /> */}
    <Route exact path="/single" component={SingleProduct} />  
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
