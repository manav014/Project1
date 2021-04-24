import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Map from "./HomePage/Map.js";
import HeaderBar from "./HomePage/HeaderBar.js";
import styles from "../styles/js/HomePageStyle.js";
import classNames from "classnames";
import banner_image from "./bg2.png";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
const gridStyles = {
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto",
  },
};
const gridItemStyles = {
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    flexBasis: "auto",
  },
};
const useStyles = makeStyles(styles);
const useGridStyles = makeStyles(gridStyles);
const useGridItemStyles = makeStyles(gridItemStyles);

function HomePage() {
  const gridclasses = useGridStyles();
  const griditemclasses = useGridItemStyles();
  const classes = useStyles();
  //   console.log(require("./bg2.jpg"));
  return (
    <div>
      <Map image={banner_image}>
        <div className={classes.container}>
          <Grid container className={gridclasses.grid}>
            <Grid item className={griditemclasses.grid}>
              {/* HELP: would be used for search bar or adding anything above map */}
              {/* <div className={classes.brand}>
                <h1 className={classes.title}>Material Kit React.</h1>
                <h3 className={classes.subtitle}>
                  A Badass Material-UI Kit based on Material Design.
                </h3>
              </div> */}
            </Grid>
          </Grid>
        </div>
      </Map>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <HeaderBar
          brand="Material Kit React"
          rightLinks={
            <List>
              <ListItem>Hello</ListItem>
            </List>
          }
          sticky
          color="red"
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
        />
      </div>
    </div>
  );
}

export default HomePage;
