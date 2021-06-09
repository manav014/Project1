import React from "react";

// Libraries
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

// @material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

// local components
import HeaderBar from "./HeaderBar";
import CheckoutRoutes from "../routes/CheckoutRoutes";
import PaymentDetails from "./Checkout/PaymentDetails";
import styles from "../styles/js/Checkout/CheckoutStyle.js";
import theme from "../consts/theme";

const useStyles = makeStyles(styles);

function Checkout(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const { token } = props;
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  if (!token) {
    return <Redirect to="/" />;
  }
  return (
    <ThemeProvider theme={theme}>
      <HeaderBar />
      <Grid container>
        <Grid item xs={12} md={9} lg={9}>
          <main className={classes.layout}>
            <div className={classes.paper}>
              <Typography component="h1" variant="h4" align="center">
                Checkout
              </Typography>

              <React.Fragment>
                <React.Fragment>
                  <CheckoutRoutes />
                </React.Fragment>
              </React.Fragment>
            </div>
          </main>
        </Grid>
        <Grid item md={2} lg={2}>
          <Hidden smDown>
            <div className={classes.PaymentDetailsCheckout}>
              <PaymentDetails />
              {/* This input would be removed and is for testing only */}
              <input type="text"></input>
            </div>
          </Hidden>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToProps)(Checkout);
