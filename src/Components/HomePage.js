import React from "react";

// Libraries
import classNames from "classnames";

// @material-ui components
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";

// local components
import SearchBar from "./HomePage/SearchBar";
import LeftPane from "./HomePage/LeftPane.js";
import Map from "./HomePage/Map.js";
import HomePageContainer from "./HomePage/HomePageContainer.js";
import HeaderBar from "./HeaderBar.js";
import styles from "../styles/js/HomePage/HomePageStyle.js";
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
  const [leftPane, setLeftPane] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [shop, setShop] = React.useState(null);

  const toggleDrawer =
    (anchor, open, shop = null) =>
    (event) => {
      if (
        event &&
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
      setShop(shop);
      setLeftPane({ ...leftPane, [anchor]: open });
    };
  const gridclasses = useGridStyles();
  const griditemclasses = useGridItemStyles();
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div>
        <HomePageContainer>
          <Map toggleDrawer={toggleDrawer} />
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

                {shop != null ? (
                  <LeftPane
                    state={leftPane}
                    toggleDrawer={toggleDrawer}
                    shop={shop}
                  />
                ) : (
                  <div className={classes.searchbarPosition}>
                    <SearchBar shop={shop} />
                  </div>
                )}
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
