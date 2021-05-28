import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import HeaderBar from "./HeaderBar.js";
import ProductCard from "./CartPage/ProductCard.js";
import Coupon from "./CartPage/Coupon.js";
import PaymentDetails from "./Checkout/PaymentDetails.js";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { ThemeProvider } from "@material-ui/core/styles";

import styles from "../styles/js/CartPage/CartPageStyle.js";

import theme from "../consts/theme";
const useStyles = makeStyles(styles);

function CartPage() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <HeaderBar />
      <div className={classes.papercart}>
        <Grid container>
          <Grid item xs={12} md={9} lg={9}>
            <Typography
              component="h1"
              variant="h4"
              style={{ marginLeft: "5vw", marginTop: "5vh" }}
            >
              Shopping Basket (4)
            </Typography>
            <div className={classes.ProductCardStyle}>
              <ProductCard />
            </div>
          </Grid>
          <Grid item md={3} lg={3}>
            <div className={classes.PaymentDetailsCart}>
              <PaymentDetails />
              <div style={{ marginTop: "5vh" }}>
                <Coupon />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default CartPage;
