import React from "react";
// Material UI imports
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
// Component imports
import HeaderBar from "./HeaderBar";
import PaymentForm from "./Checkout/PaymentForm";
import PaymentDetails from "./Checkout/PaymentDetails";
import ReviewOrder from "./Checkout/ReviewOrder";
import styles from "../styles/js/Checkout/CheckoutStyle.js";
import AddressPage from "./Checkout/AddressPage";

const useStyles = makeStyles(styles);
const steps = ["Shipping address", "Payment details", "Review your order"];
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#37b3f9",
    },
  },
});
function getStepContent(step, handleNext) {
  switch (step) {
    case 0:
      return <AddressPage handleNext={handleNext} />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <ReviewOrder />;
    default:
      throw new Error("Unknown step");
  }
}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
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
            <main className={classes.layout}>
              <div className={classes.paper}>
                <Typography component="h1" variant="h4" align="center">
                  Checkout
                </Typography>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                <React.Fragment>
                  {activeStep === steps.length ? (
                    <React.Fragment>
                      <Typography variant="h5" gutterBottom>
                        Thank you for your order.
                      </Typography>
                      <Typography variant="subtitle1">
                        Your order number is #2001539. We have emailed your
                        order confirmation, and will send you an update when
                        your order has shipped.
                      </Typography>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      {getStepContent(activeStep, handleNext)}
                      <div className={classes.buttons}>
                        {activeStep !== 0 && (
                          <Button
                            onClick={handleBack}
                            className={classes.button}
                          >
                            Back
                          </Button>
                        )}
                        {activeStep !== 0 ? (
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            className={classes.button}
                          >
                            {activeStep === steps.length - 1
                              ? "Place order"
                              : "Next"}
                          </Button>
                        ) : (
                          ""
                        )}
                      </div>
                    </React.Fragment>
                  )}
                </React.Fragment>
              </div>
            </main>
          </Grid>
          <Grid item md="2" lg="2">
            <Hidden smDown>
              <div className={classes.PaymentDetailsCheckout}>
                <PaymentDetails />
              </div>
            </Hidden>
          </Grid>
        </Grid>
      </ThemeProvider>
    </React.Fragment>
  );
}
