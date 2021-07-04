import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../../consts/theme";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  discount: {
    color: "#14cda8",
    fontWeight: 600,
    fontSize: "1.3rem",
  },
  discountFeature: {
    margin: "5px 0",
    fontSize: "1rem",
  },
  discountFeatureExpiry: {
    marginTop: "1.5vh",
    fontSize: "1rem",
  },
  code: {
    color: "grey",
  },
  couponHeading: {
    marginLeft: "3.5vw",
  },
}));
function CouponSection() {
  const classes = useStyles();

  return (
    <div>
      <h3 className={classes.couponHeading}>Available Coupons</h3>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="flex-start"
      >
        <Grid item xs={5}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Grid
                  container
                  direction="row"
                  //   justify="space-evenly"
                  alignItems="flex-end"
                  style={{ marginBottom: "1.1vh" }}
                  spacing={0}
                >
                  <Grid item xs={3}>
                    <div className={classes.discount}>
                      65 % <br></br>OFF
                    </div>
                  </Grid>
                  <Grid item xs={9}>
                    <div className={classes.discountFeature}>
                      <span className={classes.code}>
                        On minimum purchase of
                      </span>
                      <span> Rs.3,000</span>
                    </div>
                    <div className={classes.discountFeature}>
                      <span className={classes.code}>Code:</span>
                      <span>PREMIUM500</span>
                    </div>
                  </Grid>
                </Grid>
                <Divider orientation="horizontal" />
                <div className={classes.discountFeatureExpiry}>
                  <span className={classes.code}>Expiry :</span>
                  <span style={{ fontWeight: "600", color: "#696E79" }}>
                    JUN 30 2021
                  </span>

                  <span className={classes.code}> 11:59:00 PM </span>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={5}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Grid
                  container
                  direction="row"
                  //   justify="space-evenly"
                  alignItems="flex-end"
                  style={{ marginBottom: "1.1vh" }}
                  spacing={0}
                >
                  <Grid item xs={3}>
                    <div className={classes.discount}>
                      65 % <br></br>OFF
                    </div>
                  </Grid>
                  <Grid item xs={9}>
                    <div className={classes.discountFeature}>
                      <span className={classes.code}>
                        On minimum purchase of
                      </span>
                      <span> Rs.3,000</span>
                    </div>
                    <div className={classes.discountFeature}>
                      <span className={classes.code}>Code:</span>
                      <span>PREMIUM500</span>
                    </div>
                  </Grid>
                </Grid>
                <Divider orientation="horizontal" />
                <div className={classes.discountFeatureExpiry}>
                  <span className={classes.code}>Expiry :</span>
                  <span style={{ fontWeight: "600", color: "#696E79" }}>
                    JUN 30 2021
                  </span>

                  <span className={classes.code}> 11:59:00 PM </span>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      <h3 className={classes.couponHeading}>Expired Coupons</h3>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="flex-start"
      >
        <Grid item xs={5}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Grid
                  container
                  direction="row"
                  //   justify="space-evenly"
                  alignItems="flex-end"
                  style={{ marginBottom: "1.1vh" }}
                  spacing={0}
                >
                  <Grid item xs={3}>
                    <div className={classes.discount}>
                      65 % <br></br>OFF
                    </div>
                  </Grid>
                  <Grid item xs={9}>
                    <div className={classes.discountFeature}>
                      <span className={classes.code}>
                        On minimum purchase of
                      </span>
                      <span> Rs.3,000</span>
                    </div>
                    <div className={classes.discountFeature}>
                      <span className={classes.code}>Code:</span>
                      <span>PREMIUM500</span>
                    </div>
                  </Grid>
                </Grid>
                <Divider orientation="horizontal" />
                <div className={classes.discountFeatureExpiry}>
                  <span className={classes.code}>Expiry :</span>
                  <span style={{ fontWeight: "600", color: "#696E79" }}>
                    JUN 30 2021
                  </span>

                  <span className={classes.code}> 11:59:00 PM </span>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={5}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Grid
                  container
                  direction="row"
                  //   justify="space-evenly"
                  alignItems="flex-end"
                  style={{ marginBottom: "1.1vh" }}
                  spacing={0}
                >
                  <Grid item xs={3}>
                    <div className={classes.discount}>
                      65 % <br></br>OFF
                    </div>
                  </Grid>
                  <Grid item xs={9}>
                    <div className={classes.discountFeature}>
                      <span className={classes.code}>
                        On minimum purchase of
                      </span>
                      <span> Rs.3,000</span>
                    </div>
                    <div className={classes.discountFeature}>
                      <span className={classes.code}>Code:</span>
                      <span>PREMIUM500</span>
                    </div>
                  </Grid>
                </Grid>
                <Divider orientation="horizontal" />
                <div className={classes.discountFeatureExpiry}>
                  <span className={classes.code}>Expiry :</span>
                  <span style={{ fontWeight: "600", color: "#696E79" }}>
                    JUN 30 2021
                  </span>

                  <span className={classes.code}> 11:59:00 PM </span>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      <br></br>
    </div>
  );
}

export default CouponSection;
