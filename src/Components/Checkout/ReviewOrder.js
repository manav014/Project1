import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Paper from "@material-ui/core/Paper";
import PaymentDetails from "./PaymentDetails";
import ProductCard from "../CartPage/ProductCard";

// const products = [
//   { name: "Product 1", desc: "A nice thing", price: "$9.99" },
//   { name: "Product 2", desc: "Another thing", price: "$3.45" },
//   { name: "Product 3", desc: "Something else", price: "$6.51" },
//   { name: "Product 4", desc: "Best thing of all", price: "$14.11" },
//   { name: "Shipping", desc: "", price: "Free" },
// ];
const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr John Smith" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
  paper: {
    width: "auto",
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1),
  },
  heading: {
    fontSize: "3.5vw",
    fontWeight: "600",
    paddingBottom: "5px",
  },
  secondaryHeading1: {
    paddingTop: "5px",
  },
  secondaryHeading: {
    color: theme.palette.text.secondary,
  },
}));

export default function Review() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <Grid container spacing={2}>
        {/* <Hidden smDown> */}
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6" gutterBottom className={classes.title}>
              Shipping Address
            </Typography>
            <Typography gutterBottom>Avanya Wadhwa</Typography>
            <Typography gutterBottom>
              {" "}
              50 D/B Slice 4 Scheme 78 Vijay Nagar{" "}
            </Typography>
            <Typography gutterBottom>Indore , M.P (201013) </Typography>
            <Typography gutterBottom>+91 987456321</Typography>
          </Paper>
        </Grid>
        {/* </Hidden> */}
        <Grid item container direction="column" xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6" gutterBottom className={classes.title}>
              Payment details
            </Typography>
            <Grid container>
              {payments.map((payment) => (
                <React.Fragment key={payment.name}>
                  <Grid item xs={6}>
                    <Typography gutterBottom>{payment.name}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography gutterBottom>{payment.detail}</Typography>
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Hidden smUp>
        <PaymentDetails />
      </Hidden>
      <ProductCard></ProductCard>
      {/* <List disablePadding>
        {products.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            $34.06
          </Typography>
        </ListItem>
      </List> */}
    </React.Fragment>
  );
}
