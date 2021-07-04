import React from "react";
import { Route } from "react-router-dom";

import AddressPage from "../components/Checkout/AddressPage";
import PersonalForm from "../components/MyAccount/PersonalForm";

const CheckoutRoutes = () => (
  <div>
    <Route exact path="/myaccount">
      <PersonalForm />
    </Route>
    <Route exact path="/myaccount/address">
      <AddressPage />
    </Route>
  </div>
);

export default CheckoutRoutes;
