import React from "react";
import HomePageContainer from "./HomePage/HomePageContainer.js";
import HeaderBar from "./HeaderBar.js";
import styles from "../styles/js/HomePage/HomePageStyle.js";
import classNames from "classnames";
import Grid from "@material-ui/core/Grid";
import SearchBar from "./HomePage/SearchBar";
import { makeStyles } from "@material-ui/core/styles";
import LeftPane from "./HomePage/LeftPane.js";
import Map from "./HomePage/Map.js";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../consts/theme";

const gridStyles = {
  grid: {
    width: "auto",
  },
};
const gridItemStyles = {
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
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
    <ThemeProvider theme={theme}>
      <div>
        <HomePageContainer>
          <Map />
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
                <div className={classes.searchbarPosition}>
                  <SearchBar />
                </div>
                <LeftPane />
              </Grid>
            </Grid>
          </div>
        </HomePageContainer>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <HeaderBar sticky />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default HomePage;
