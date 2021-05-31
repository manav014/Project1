import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { ThemeProvider } from "@material-ui/core/styles";

// local components
import theme from "../../consts/theme";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "auto",
    padding: theme.spacing(1),
    marginTop: theme.spacing(2),
    [theme.breakpoints.up(1125 + theme.spacing(3) * 2)]: {
      width: "19vw",
      padding: theme.spacing(3),
    },
  },
  divider: {
    marginTop: "2vh",
    marginBottom: "2vh",
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container>
            <Typography style={{ fontWeight: "bold", marginLeft: "1vw" }}>
              APPLY COUPONS
            </Typography>

            <Grid item xs={12}>
              <Divider className={classes.divider} orientation="horizontal" />
              <Grid container>
                <Grid item xs={1}>
                  <Checkbox
                    defaultChecked
                    color="primary"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                </Grid>

                <Grid item xs={11}>
                  <div style={{ marginLeft: "2vw" }}>
                    <Typography style={{ fontWeight: "bold" }}>
                      WOW100
                    </Typography>
                    <Typography style={{ color: "green" }}>
                      Flat Rs. 100 OFF on your bill.
                    </Typography>
                    <Typography gutterBottom variant="subtitle1">
                      Just add fashion products above Rs. 399
                    </Typography>
                  </div>
                </Grid>
              </Grid>
              <Divider className={classes.divider} orientation="horizontal" />
            </Grid>

            <Grid container>
              <Grid item xs={1}>
                <Checkbox
                  defaultChecked
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </Grid>

              <Grid item xs={11}>
                <div style={{ marginLeft: "2vw" }}>
                  <Typography style={{ fontWeight: "bold" }}>WOW200</Typography>
                  <Typography style={{ color: "green" }}>
                    Flat Rs. 200 OFF on your bill.
                  </Typography>
                  <Typography gutterBottom variant="subtitle1">
                    Just add fashion products above Rs. 599
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </ThemeProvider>
  );
}
