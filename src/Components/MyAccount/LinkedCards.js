import React from "react";

// @material-ui components
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import AssignmentIcon from "@material-ui/icons/Assignment";

// local components
import theme from "../../consts/theme";

const useStyles = makeStyles(() => ({
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
}));

function LinkedCards() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item xs={4}>
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
                subheader="Track, return or buy things again"
                subheaderTypographyProps={{ variant: "body" }}
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardActionArea>
              <CardHeader
                avatar={
                  <Avatar className={classes.avatar}>
                    <AssignmentIcon />
                  </Avatar>
                }
                title="My Rashon List"
                titleTypographyProps={{ variant: "subtitle2" }}
                subheader="Track, return or buy things again"
                subheaderTypographyProps={{ variant: "body" }}
              />
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default LinkedCards;
