import React from "react";
import { useHistory } from "react-router-dom";

// @material-ui components
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";

// local components
import theme from "../../consts/theme";
const steps = ["Shipping address", "Payment details", "Review your order"];

const useStyles = makeStyles((theme) => ({
  stepper: {
    padding: theme.spacing(3, 2, 5),
  },
}));

export default function PaymentForm() {
  const classes = useStyles();
  let history = useHistory();

  const handleRedirect = (url) => {
    history.push(url);
  };
  return (
    <ThemeProvider theme={theme}>
      <Stepper activeStep={1} className={classes.stepper}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          onClick={() => {
            handleRedirect("/checkout/address");
          }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            handleRedirect("/checkout/review");
          }}
        >
          {"Next"}
        </Button>
      </div>
    </ThemeProvider>
  );
}
