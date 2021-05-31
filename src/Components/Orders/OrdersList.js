import React from "react";

// @material-ui components
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";

// local components
import theme from "../../consts/theme";
import OrderAccordion from "./OrderAccordion";

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1),
    marginRight: theme.spacing(7),
  },
}));

function OrdersList() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item xs={3}>
          <Typography component="h1" variant="h6" align="center" zeroMinWidth>
            Order No: 874578412
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Box>
            <Typography
              component="h1"
              variant="body2"
              align="center"
              zeroMinWidth
            >
              <b>Ordered On:</b> Sept 12,2020 at 3:03 PM
            </Typography>
            <Typography
              component="h1"
              variant="body2"
              align="center"
              zeroMinWidth
            >
              <b>Delivered On:</b> Sept 13,2020
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box>
            <Typography
              component="h1"
              variant="body2"
              align="center"
              zeroMinWidth
            >
              <b>SHIPPED TO</b>
            </Typography>
            <Typography
              component="h1"
              variant="body2"
              align="center"
              zeroMinWidth
            >
              Khushi Rauniyar
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box>
            <Typography
              component="h1"
              variant="subtitle1"
              align="center"
              zeroMinWidth
            >
              <b>Total: </b>₹2,148
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <OrderAccordion />
      <div className={classes.buttons}>
        <Button
          className={classes.button}
          style={{
            backgroundColor: "#37b3f9",
            color: "#FFFFFF",
          }}
        >
          Buy It Again
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default OrdersList;
