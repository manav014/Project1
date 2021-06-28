import React from "react";
import oats from "../../assets/ExploreProduct/oatsImage.jpg";
import dairy from "../../assets/ExploreProduct/dairy.png";
import nuts from "../../assets/ExploreProduct/nuts.png";
import pulses from "../../assets/ExploreProduct/dal.png";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({
  img: {
    margin: "auto",
    // display: "block",
    objectFit: "scale-down",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  image: {
    objectFit: "scale-down",
    width: 256,
    height: 256,
  },
}));

function SpecificCategory() {
  const classes = useStyles();

  return (
    <div>
      {/* <Grid container>
        <Grid item xs={6} lg={3} sm={6}>
          <div style={{ marginLeft: "1vw" }}>
            <img
              src={oats}
              style={{ height: "20vh", width: "10vw", borderRadius: "5px" }}
              alt=""
            />
            <div style={{ color: "#3D3C3C", fontWeight: "500" }}>
              Oats,Museli,Dalia
            </div>
          </div>
        </Grid>
        <Grid item xs={6} lg={3} sm={6}>
          <div style={{ marginLeft: "1vw" }}>
            <img
              src={dairy}
              style={{ height: "20vh", width: "10vw", borderRadius: "5px" }}
              alt=""
            />
            <div style={{ color: "#3D3C3C", fontWeight: "500" }}>
              Dairy Products
            </div>
          </div>
        </Grid>
        <Grid item xs={6} lg={3} sm={6}>
          <div style={{ marginLeft: "1vw" }}>
            <img
              src={nuts}
              style={{ height: "20vh", width: "10vw", borderRadius: "5px" }}
              alt=""
            />
            <div style={{ color: "#3D3C3C", fontWeight: "500" }}>
              Dry fruits,nuts ,seeds
            </div>
          </div>
        </Grid>
        <Grid item xs={6} lg={3} sm={6}>
          <div style={{ marginLeft: "1vw" }}>
            <img
              src={pulses}
              style={{ height: "20vh", width: "10vw", borderRadius: "5px" }}
              alt=""
            />
            <div style={{ color: "#3D3C3C", fontWeight: "500" }}>
              Dal and Pulses
            </div>
          </div>
        </Grid>
        <Grid item xs={6} lg={3} sm={6}>
          <div style={{ marginLeft: "1vw" }}>
            <img
              src={oats}
              style={{ height: "20vh", width: "10vw", borderRadius: "5px" }}
              alt=""
            />
            <div style={{ color: "#3D3C3C", fontWeight: "500" }}>
              Oats,Museli,Dalia
            </div>
          </div>
        </Grid>
        <Grid item xs={6} lg={3} sm={6}>
          <div style={{ marginLeft: "1vw" }}>
            <img
              src={oats}
              style={{ height: "20vh", width: "10vw", borderRadius: "5px" }}
              alt=""
            />
            <div style={{ color: "#3D3C3C", fontWeight: "500" }}>
              Oats,Museli,Dalia
            </div>
          </div>
        </Grid>
        <Grid item xs={6} lg={3} sm={6}>
          <div style={{ marginLeft: "1vw" }}>
            <img
              src={dairy}
              style={{ height: "20vh", width: "10vw", borderRadius: "5px" }}
              alt=""
            />
            <div style={{ color: "#3D3C3C", fontWeight: "500" }}>
              Dairy Products
            </div>
          </div>
        </Grid>
        <Grid item xs={6} lg={3} sm={6}>
          <div style={{ marginLeft: "1vw" }}>
            <img
              src={nuts}
              style={{ height: "20vh", width: "10vw", borderRadius: "5px" }}
              alt=""
            />
            <div style={{ color: "#3D3C3C", fontWeight: "500" }}>
              Dry fruits,nuts ,seeds
            </div>
          </div>
        </Grid>
      </Grid> */}

      <h2 style={{ marginLeft: "1vw" }}>
        A healthy outside starts from inside
      </h2>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item>
          <ButtonBase className={classes.image}>
            <img src={oats} className={classes.img} alt="" />{" "}
          </ButtonBase>
          <div style={{ color: "#3D3C3C", fontWeight: "500" }}>
            Oats,Museli,Dalia
          </div>
        </Grid>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img src={dairy} className={classes.img} alt="" />{" "}
          </ButtonBase>
          <div style={{ color: "#3D3C3C", fontWeight: "500" }}>
            Dairy Products
          </div>
        </Grid>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img src={nuts} className={classes.img} alt="" />{" "}
          </ButtonBase>
          <div style={{ color: "#3D3C3C", fontWeight: "500" }}>
            Dry Frutits,nuts,seeds
          </div>
        </Grid>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img src={pulses} className={classes.img} alt="" />{" "}
          </ButtonBase>
          <div style={{ color: "#3D3C3C", fontWeight: "500" }}>
            Dals and pulses
          </div>
        </Grid>
        {/* <Grid item>
          <img
            src={pulses}
            style={{ height: "30vh", width: "20vw", borderRadius: "5px" }}
            alt=""
          />
          <div style={{ color: "#3D3C3C", fontWeight: "500" }}>
            Oats,Museli,Dalia
          </div>
        </Grid> */}
      </Grid>
    </div>
  );
}

export default SpecificCategory;
