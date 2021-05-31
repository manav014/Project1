import React from "react";

// @material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { ThemeProvider } from "@material-ui/core/styles";

// local components
import styles from "../../styles/js/Checkout/PaymentDetailsStyle.js";
import theme from "../../consts/theme";

const products = [
  { name: "Price (2 Items)", price: "$9.99" },
  { name: "Discount", price: "$3.45" },
  { name: "Coupon Discount", price: "$6.51" },
  { name: "Delivery Charges", price: "Free" },
];

const useStyles = makeStyles(styles);
function PaymentDetails() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div>
        <div className={classes.layoutPayment}>
          <Paper className={classes.paperPayment}>
            <Typography variant="h6" gutterBottom>
              Price Details
            </Typography>
            <Divider orientation="horizontal" />
            <List disablePadding>
              {products.map((product) => (
                <ListItem className={classes.listItem} key={product.name}>
                  <ListItemText
                    primary={product.name}
                    secondary={product.desc}
                  />
                  <Typography variant="body2">{product.price}</Typography>
                </ListItem>
              ))}
              <Divider orientation="horizontal" />
              <ListItem className={classes.listItem}>
                <ListItemText primary="Total Amount" />
                <Typography variant="subtitle1" className={classes.total}>
                  $34.06
                </Typography>
              </ListItem>
            </List>
          </Paper>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default PaymentDetails;
