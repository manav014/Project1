import React, { useEffect, useState } from "react";
import axios from "axios";

// @material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { ThemeProvider } from "@material-ui/core/styles";
import { connect } from "react-redux";
import LoopIcon from "@material-ui/icons/Loop";

// local components
import HeaderBar from "./HeaderBar.js";
import ProductCard from "./CartPage/ProductCard.js";
import Coupon from "./CartPage/Coupon.js";
import PaymentDetails from "./Checkout/PaymentDetails.js";
import styles from "../styles/js/CartPage/CartPageStyle.js";
import theme from "../consts/theme";
import { cartDetailsURL } from "../consts/constants";
import { Redirect } from "react-router-dom";
import { fetchCart } from "../store/actions/cart";
import EmptyCart from "../assets/CartPage/frame.png";

const useStyles = makeStyles(styles);

function CartPage(props) {
  const classes = useStyles();
  const { token, cart, loading } = props;
  const [productDetails, setproductDetails] = useState(null);

  useEffect(() => {
    props.fetchCart();
  }, []);
  useEffect(() => {
    cart ? setproductDetails(cart.products) : console.log("");
  }, [cart]);

  if (!token) {
    return <Redirect to="/" />;
  }
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
              align="center"
            >
              Shopping Basket (
              {cart ? (
                cart.total_products_quantity ? (
                  cart.total_products_quantity
                ) : (
                  "0"
                )
              ) : loading ? (
                <LoopIcon color="disabled" />
              ) : (
                "error"
              )}
              )
            </Typography>

            {productDetails && productDetails.length > 0 ? (
              productDetails.map((element, key) => (
                <div>
                  <div className={classes.ProductCardStyle} key={key}>
                    <ProductCard
                      name={element.product.product.name}
                      mrp={element.product.product.mrp}
                      price={element.product.seller_price}
                      slug={element.product.slug}
                      subtotal={element.product_total}
                      sellerName={element.seller_name}
                      quantity={element.quantity}
                    />
                  </div>
                </div>
              ))
            ) : (
              <img src={EmptyCart} alt={"Empty Cart"} />
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
    cart: state.cart.shoppingCart,
    loading: state.cart.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCart: () => dispatch(fetchCart()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
