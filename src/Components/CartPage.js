import React, { useEffect, useState } from "react";
import axios from "axios";

// @material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { ThemeProvider } from "@material-ui/core/styles";
import { connect } from "react-redux";

// local components
import HeaderBar from "./HeaderBar.js";
import ProductCard from "./CartPage/ProductCard.js";
import Coupon from "./CartPage/Coupon.js";
import PaymentDetails from "./Checkout/PaymentDetails.js";
import styles from "../styles/js/CartPage/CartPageStyle.js";
import theme from "../consts/theme";
import { cartDetailsURL } from "../consts/constants";

const useStyles = makeStyles(styles);

function CartPage(props) {
  const classes = useStyles();
  const { token } = props;

  const [productDetails, setproductDetails] = useState(null);

  useEffect(() => {
    axios
      .get(cartDetailsURL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setproductDetails(res.data.products);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

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
            {productDetails ? (
              productDetails.map((element, key) => (
                <div className={classes.ProductCardStyle}>
                  <ProductCard
                    name={element.product.product.name}
                    mrp={element.product.product.mrp}
                    price={element.product.seller_price}
                    slug={element.product.slug}
                    subtotal={element.product_total}
                    sellerName={element.seller_name}
                  />
                </div>
              ))
            ) : (
              <div>Empty cart</div>
            )}
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

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};
export default connect(mapStateToProps)(CartPage);
