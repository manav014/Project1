import React, { useState } from "react";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";

import theme from "../consts/theme";
import HeaderBar from "./HeaderBar.js";
import LinkedCards from "./MyAccount/LinkedCards";
import MainContainer from "./MyAccount/MainContainer";

const useStyles = makeStyles(() => ({
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
}));
export default function MyAcccount() {
  const classes = useStyles();
  const [username, setUserName] = useState("Khushi Rauniyar");
  return (
    <ThemeProvider theme={theme}>
      <div>
        <HeaderBar sticky />
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
        <MainContainer />
      </div>
    </ThemeProvider>
  );
}
