import React, { useState } from "react";

// Libraries
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

// @material-ui components
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Hidden from "@material-ui/core/Hidden";

// local components
import HeaderBar from "./HeaderBar.js";
import LinkedCards from "./MyAccount/LinkedCards";
import MainContainer from "./MyAccount/MainContainer";
import SideBar from "./MyAccount/SideBar";
import SideBarMobile from "./MyAccount/SideBarMobile.js";
import theme from "../consts/theme";

const useStyles = makeStyles(() => ({
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
}));
function MyAccount(props) {
  const classes = useStyles();
  const [username, setUserName] = useState("Khushi Rauniyar");
  const { token } = props;
  if (!token) {
    return <Redirect to="/" />;
  }
  return (
    <ThemeProvider theme={theme}>
      <div>
        <HeaderBar sticky />
        <Hidden smDown>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <Grid item xs={2}>
              <Box>
                <CardHeader
                  avatar={
                    <Avatar className={classes.avatar}>{username[0]}</Avatar>
                  }
                  title="Welcome"
                  subheaderTypographyProps={{ variant: "subtitle2" }}
                  titleTypographyProps={{ variant: "body" }}
                  subheader={username}
                />
              </Box>
            </Grid>
            <Grid item xs={9}>
              <LinkedCards />
            </Grid>
          </Grid>
          <Grid container direction="row" justify="space-evenly">
            <Grid item xs={3}>
              <SideBar />
            </Grid>
            <Grid item xs={8}>
              <MainContainer />
            </Grid>
          </Grid>
        </Hidden>
      </div>

      <Hidden mdUp>
        <SideBarMobile />
      </Hidden>
    </ThemeProvider>
  );
}
const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToProps)(MyAccount);
