import React from "react";

// Libraries
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

// @material-ui components
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { ThemeProvider } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import Hidden from "@material-ui/core/Hidden";

// local components
import HeaderBar from "./HeaderBar.js";
import OrderList from "./Orders/OrdersList";
import ShopOrderMobile from "./Orders/ShopOrderMobile.js";
import theme from "../consts/theme";

const filter = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

function Orders(props) {
  const [filters, setFilters] = React.useState("EUR");

  const { token } = props;

  if (!token) {
    return <Redirect to="/" />;
  }
  const handleChange = (event) => {
    setFilters(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <HeaderBar sticky />
      <Hidden smDown>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12}>
            <Typography component="h1" variant="h4" align="center">
              Your Orders
            </Typography>
          </Grid>
          <Grid item xs={1} justify="flex-start" alignItems="flex-start">
            <TextField
              select
              fullWidth
              margin="normal"
              label="FILTER"
              value={filters}
              onChange={handleChange}
              variant="outlined"
            >
              {filter.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={10} justify="flex-end" alignItems="flex-end">
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <Button
                      style={{
                        backgroundColor: "#37b3f9",
                        color: "#FFFFFF",
                      }}
                    >
                      Search Orders
                    </Button>
                  </InputAdornment>
                ),
              }}
              label="Search For Orders"
              name="searchOrders"
              autoComplete="Search For Orders"
            />
          </Grid>
          <Grid item xs={11}>
            <Paper variant="outlined" style={{ padding: "1vh" }}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <OrderList />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={11}>
            <Paper
              variant="outlined"
              style={{ padding: "1vh", marginTop: "2vh" }}
            >
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <OrderList />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <ShopOrderMobile />
      </Hidden>
    </ThemeProvider>
  );
}
const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToProps)(Orders);
