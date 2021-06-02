import React, { useState } from "react";

// @material-ui components
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import AssignmentIcon from "@material-ui/icons/Assignment";

// local components
import SideBar from "./SideBar";
import theme from "../../consts/theme";

const useStyles = makeStyles(() => ({
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
}));

function SideBarMobile() {
  const [username, setUserName] = useState("Khushi Rauniyar");
  const classes = useStyles();


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
        <Grid item xs={5}>
          <Card>
            <CardActionArea>
              <CardHeader
                avatar={
                  <Avatar className={classes.avatar}>
                    <LocalMallIcon />
                  </Avatar>
                }
                title="My Orders"
                titleTypographyProps={{ variant: "subtitle2" }}
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Card>
            <CardActionArea>
              <CardHeader
                avatar={
                  <Avatar className={classes.avatar}>
                    <AssignmentIcon />
                  </Avatar>
                }
                title="My Rashon"
                titleTypographyProps={{ variant: "subtitle2" }}
              />
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={10}>
          <SideBar />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SideBarMobile;
