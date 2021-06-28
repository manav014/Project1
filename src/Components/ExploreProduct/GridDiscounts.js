import React from "react";
import Grid from "@material-ui/core/Grid";
import dal from "../../assets/ExploreProduct/dal.png";
import cereals from "../../assets/ExploreProduct/cereals.jpg";
import tea from "../../assets/ExploreProduct/tea.jpg";
import honey from "../../assets/ExploreProduct/honey.jpg";
import snacks from "../../assets/ExploreProduct/snacks.jpg";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  gridBorder: {
    marginTop: "5vh",
    border: "1px solid #C4C4C4",
    borderRadius: "5px",
    height: "63vh",
    width: "45vw",
  },
  heading: {
    fontSize: "1.7rem",
    padding: "15px",
    fontWeight: "500",
  },
  GridImage1: {
    width: "90%",
    borderRadius: "3px",
    display: "block",
    margin: "auto",
    height: "80%",
    objectFit: "contain",
  },
  GridImage2: {
    borderRadius: "3px",
    display: "block",
    margin: "auto",
    objectFit: "contain",
    height: "20vh",
    width: "20vw",
  },
  seemore: {
    paddingLeft: "55px",
  },
  snacktext: {
    fontSize: "1rem",
    fontWeight: "400",
    color: "#555555",
    textAlign: "center",
    padding: "10px",
  },
}));
function GirdDiscounts() {
  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        style={{ marginTop: "2vh" }}
      >
        <Grid item className={classes.gridBorder}>
          <div className={classes.heading}>
            Explore all varities of Dal and Pulses
          </div>
          <img className={classes.GridImage1} src={dal} alt="" />
          <div className={classes.seemore} variant="body2">
            see more
          </div>
        </Grid>
        <Grid item className={classes.gridBorder}>
          <div className={classes.heading}>Snacks Time!</div>
          <Grid container>
            <Grid item>
              <img className={classes.GridImage2} src={cereals} alt="" />
              <div className={classes.snacktext}>Cereals & Oats</div>
            </Grid>
            <Grid item>
              <img className={classes.GridImage2} src={tea} alt="" />
              <div className={classes.snacktext}>Tea & Coffee</div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <img className={classes.GridImage2} src={honey} alt="" />

              <div className={classes.snacktext}>Spreads & Honey </div>
            </Grid>
            <Grid item>
              <img className={classes.GridImage2} src={snacks} alt="" />
              <div className={classes.snacktext}>Snacks Store</div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default GirdDiscounts;
