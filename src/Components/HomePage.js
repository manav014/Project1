import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Map from "./HomePage/Map.js";
import HeaderBar from "./HomePage/HeaderBar.js";
import styles from "../styles/js/HomePageStyle.js";
import classNames from "classnames";
import banner_image from "./bg2.png";
import Grid from "@material-ui/core/Grid";
import SearchBar from "./HomePage/SearchBar";
import { makeStyles } from "@material-ui/core/styles";
import CustomDropdown from "./HomePage/CustomDropdown.js";

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

              <SearchBar />
            </Grid>
          </Grid>
        </div>
      </Map>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <HeaderBar
          brand="Material Kit React"
          rightLinks={
            <List>
              <CustomDropdown
                buttonText="My account"
                buttonProps={{
                  className: classes.navLink,
                  color: "transparent",
                }}
                dropdownList={["Profile", { divider: true }, "Logout"]}
              />
            </List>
          }
          sticky
          color="blue"
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
