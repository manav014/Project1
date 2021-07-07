import React from "react";
import { Route } from "react-router-dom";

import AddressPage from "../components/Checkout/AddressPage";
import PersonalForm from "../components/MyAccount/PersonalForm";
import ReviewSection from "../components/MyAccount/ReviewSection";
import CouponSection from "../components/MyAccount/CouponSection";
import WishList from "../components/MyAccount/WishList";

const MyAccountRoutes = (props) => (
  <div>
    <Route exact path="/myaccount">
      <PersonalForm
        userDetails={props.userDetails}
        setUserDetails={props.setUserDetails}
      />
    </Route>
    <Route exact path="/myaccount/review">
      <ReviewSection />
    </Route>
    <Route exact path="/myaccount/address">
      <AddressPage />
    </Route>
    <Route exact path="/myaccount/coupons">
      <CouponSection />
    </Route>
    <Route exact path="/myaccount/wishlist">
      <WishList />
    </Route>
  </div>
);

export default MyAccountRoutes;
