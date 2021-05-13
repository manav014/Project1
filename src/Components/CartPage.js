import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import HeaderBar from "./HeaderBar.js";
import ProductCard from "./CartPage/ProductCard.js";
import Coupon from "./CartPage/Coupon.js";
import PaymentDetails from "./Checkout/PaymentDetails.js";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import styles from "../styles/js/CartPage/CartPageStyle.js";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#37b3f9",
    },
  },
});

function CartPage() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.papercart}>
        <HeaderBar
          brand="Blah Project"
          sticky
          changeColorOnScroll={{
            height: 400,
            color: "#37b3f9",
          }}
        />
        <Grid container>
          <Grid item xs="12" md="9" lg="9">
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
          <Grid item md="3" lg="3">
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
