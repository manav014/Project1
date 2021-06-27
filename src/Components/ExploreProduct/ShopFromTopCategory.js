import React from "react";
import maggi from "../../assets/HomePage/maggi.png";
import flour from "../../assets/ExploreProduct/flour.jpg";
import Grid from "@material-ui/core/Grid";
import oil from "../../assets/ExploreProduct/oil.jpg";
import chips from "../../assets/ExploreProduct/chips.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  gridBorder: {
    border: "1px solid #C4C4C4",
    borderRadius: "5px",
  },
  image: {
    height: "22vh",
    marginTop: "1vh",
  },
  shoptext: {
    textAlign: "center",
    color: "#3D3C3C",
    fontWeight: "700",
    fontSize: "1.1rem",
  },
}));

function ShopFromTopCategory() {
  const classes = useStyles();
  return (
    <div>
      <h2 style={{ marginLeft: "1vw" }}>Shop from Top Categories</h2>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item className={classes.gridBorder}>
          <img src={maggi} className={classes.image} alt="" />
          <div>Maggi</div>
        </Grid>
        <Grid item className={classes.gridBorder}>
          <img src={flour} className={classes.image} alt="" />
          <div>Flour,Ata,Suji</div>
        </Grid>
        <Grid item className={classes.gridBorder}>
          <img src={oil} className={classes.image} alt="" />
          <div>Refined Oil</div>
        </Grid>
        <Grid item className={classes.gridBorder}>
          <img src={chips} className={classes.image} alt="" />
          <div>Chips and Kurkure</div>
        </Grid>
        <Grid item className={classes.gridBorder}>
          <img src={maggi} className={classes.image} alt="" />
          <div>Maggi</div>
        </Grid>
      </Grid>
      <br></br>
    </div>
  );
}

export default ShopFromTopCategory;
