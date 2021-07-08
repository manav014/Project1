import React from "react";
import { Route } from "react-router-dom";

import AddressPage from "../Components/Checkout/AddressPage";
import PersonalForm from "../Components/MyAccount/PersonalForm";
import ReviewSection from "../Components/MyAccount/ReviewSection";
import CouponSection from "../Components/MyAccount/CouponSection";
import WishList from "../Components/MyAccount/WishList";

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
