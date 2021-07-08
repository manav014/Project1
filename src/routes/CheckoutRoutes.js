import React from "react";
import { Route } from "react-router-dom";

import Typography from "@material-ui/core/Typography";

import PaymentForm from "../Components/Checkout/PaymentForm";
import ReviewOrder from "../Components/Checkout/ReviewOrder";
import AddressPage from "../Components/Checkout/AddressPage";

const CheckoutRoutes = () => (
  <div>
    <Route exact path="/checkout/address">
      <AddressPage />
    </Route>
    <Route exact path="/checkout/payment">
      <PaymentForm />
    </Route>
    <Route exact path="/checkout/review">
      <ReviewOrder />
    </Route>
    <Route exact path="/checkout/success">
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          Thank you for your order.
        </Typography>
        <Typography variant="subtitle1">
          Your order number is #2001539. We have emailed your order
          confirmation, and will send you an update when your order has shipped.
        </Typography>
      </React.Fragment>
    </Route>
  </div>
);

export default CheckoutRoutes;
