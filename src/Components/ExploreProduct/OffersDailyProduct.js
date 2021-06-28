import React from "react";
import maggi from "../../assets/HomePage/maggi.png";
import flour from "../../assets/ExploreProduct/Flour.png";
import dal from "../../assets/ExploreProduct/dal.png";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  image: {
    objectFit: "scale-down",
  },
  gridBorder: {
    border: "1px solid #C4C4C4",
    borderRadius: "5px",
  },
  productImage: {
    height: "20vh",
    width: "11vw",
    marginTop: "1vh",
  },
  text: {
    height: "5.35vh",
    borderRadius: "0px 5px",
    textAlign: "center",
    color: "#B40000",
    fontWeight: "700",
    fontSize: "1.1rem",
    background: "linear-gradient(to bottom, #FFFFFF,#BCE7FF)",
  },
}));

function OffersDailyProduct() {
  const classes = useStyles();

  return (
    <div>
      <h2 style={{ marginLeft: "1vw" }}>Offers On Daily Products</h2>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        style={{ marginTop: "1vh" }}
      >
        <Grid item className={classes.gridBorder}>
          {" "}
          <ButtonBase className={classes.image}>
            <img src={maggi} className={classes.productImage} alt="" />{" "}
          </ButtonBase>
          <div className={classes.text}>
            UPTO <i>50%</i> OFF
          </div>
        </Grid>
        <Grid item className={classes.gridBorder}>
          <ButtonBase className={classes.image}>
            <img src={flour} className={classes.productImage} alt="" />{" "}
          </ButtonBase>
          <div className={classes.text}>
            UPTO <i>50%</i> OFF
          </div>
        </Grid>
        <Grid item className={classes.gridBorder}>
          {" "}
          <ButtonBase className={classes.image}>
            <img src={dal} className={classes.productImage} alt="" />{" "}
          </ButtonBase>
          <div className={classes.text}>
            UPTO <i>50%</i> OFF
          </div>
        </Grid>
        <Grid item className={classes.gridBorder}>
          {" "}
          <ButtonBase className={classes.image}>
            <img src={maggi} className={classes.productImage} alt="" />{" "}
          </ButtonBase>
          <div className={classes.text}>
            UPTO <i>50%</i> OFF
          </div>
        </Grid>
        <Grid item className={classes.gridBorder}>
          <ButtonBase className={classes.image}>
            <img src={flour} className={classes.productImage} alt="" />{" "}
          </ButtonBase>
          <div className={classes.text}>
            UPTO <i>50%</i> OFF
          </div>
        </Grid>
        <Grid item className={classes.gridBorder}>
          <ButtonBase className={classes.image}>
            <img src={dal} className={classes.productImage} alt="" />{" "}
          </ButtonBase>
          <div className={classes.text}>
            UPTO <i>50%</i> OFF
          </div>
        </Grid>
        <Grid item className={classes.gridBorder}>
          <ButtonBase className={classes.image}>
            <img src={maggi} className={classes.productImage} alt="" />{" "}
          </ButtonBase>
          <div
            style={{
              height: "5.35vh",
              // marginBottom: "0vh",
              borderRadius: "0px 5px",
              textAlign: "center",
              color: "#B40000",
              fontWeight: "700",
              fontSize: "1.1rem",

              background: "linear-gradient(to bottom, #FFFFFF,#BCE7FF)",
            }}
          >
            UPTO <i>50%</i> OFF
          </div>
        </Grid>
        <Grid item className={classes.gridBorder}>
          {" "}
          <ButtonBase className={classes.image}>
            <img src={flour} className={classes.productImage} alt="" />{" "}
          </ButtonBase>
          <div className={classes.text}>
            UPTO <i>50%</i> OFF
          </div>{" "}
        </Grid>
      </Grid>
    </div>
  );
}

export default OffersDailyProduct;
