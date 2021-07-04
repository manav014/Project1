import React, { useState, useEffect } from "react";

// Libraries
import { Redirect } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

// @material-ui components
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import CardHeader from "@material-ui/core/CardHeader";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Button from "@material-ui/core/Button";

// local components
import SideBar from "./SideBar";
import theme from "../../consts/theme";
import { userDetailsURL } from "../../consts/constants";

const useStyles = makeStyles(() => ({
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
  root: {
    width: "100%",
    // maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(9),
  },
}));

function SideBarMobile(props) {
  const [username, setUserName] = useState("");
  // TODO to be removed after complete backend imlpementation
  // setUserName("Khushi Rauniyar");
  const { token, uname } = props;

  useEffect(() => {
    setUserName(uname);
  }, [uname]);

  const classes = useStyles();
  if (!token) {
    return <Redirect to="/" />;
  }
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item xs={11}>
          <Box>
            <CardHeader
              avatar={<Avatar className={classes.avatar}>{username[0]}</Avatar>}
              title="Welcome"
              subheaderTypographyProps={{ variant: "subtitle2" }}
              titleTypographyProps={{ variant: "body" }}
              subheader={username}
            />
          </Box>
        </Grid>
        <Grid>
          <Button variant="outlined" color="primary">
            <ListItemIcon>
              <Avatar className={classes.avatar}>
                <LocalMallIcon />
              </Avatar>
            </ListItemIcon>
            <Typography variant="button">Orders</Typography>
          </Button>
        </Grid>
        <Grid>
          <Button variant="outlined" color="primary">
            <ListItemIcon>
              <Avatar className={classes.avatar}>
                <AssignmentIcon />
              </Avatar>
            </ListItemIcon>
            <Typography variant="button">Rashan List</Typography>
          </Button>
        </Grid>
        <Grid item xs={12}>
          <SideBar />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    authenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(SideBarMobile);
