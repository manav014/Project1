import React from "react";
import HeaderBar from "./HeaderBar.js";
import ProductCard from "./CartPage/ProductCard.js";
import Coupon from "./CartPage/Coupon.js";
import PaymentDetails from "./Checkout/PaymentDetails.js";
import Typography from "@material-ui/core/Typography";

function CartPage() {
  return (
    <div>
      <HeaderBar
        brand="Blah Project"
        sticky
        changeColorOnScroll={{
          height: 400,
          color: "#37b3f9",
        }}
      />
      <Typography component="h1" variant="h4" style={{ marginLeft: "1.5vw" }}>
        Shopping Basket (4)
      </Typography>
      <ProductCard />
      <Coupon />
      <PaymentDetails />
    </div>
  );
}

export default CartPage;
