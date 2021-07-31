import React from "react";

// Libraries
import classNames from "classnames";
import { connect } from "react-redux";
import axios from "axios";

// @material-ui components
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";

// local components
import SearchBar from "./HomePage/SearchBar";
import LeftPane from "./HomePage/LeftPane.js";
import Map from "./HomePage/Map.js";
import ExploreProduct from "./ExploreProduct";
import HomePageContainer from "./HomePage/HomePageContainer.js";
import HeaderBar from "./HeaderBar.js";
import styles from "../styles/js/HomePage/HomePageStyle.js";
import theme from "../consts/theme";
import { favouriteURL } from "../consts/constants";

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

function HomePage(props) {
  const [leftPane, setLeftPane] = React.useState({
    top: false,
    left: true,
    bottom: false,
    right: false,
  });
  const [shop, setShop] = React.useState(null);
  const { token } = props;
  const [favShops, setFavShops] = React.useState([]);
  const getSavedShops = () => {
    if (token) {
      axios
        .get(favouriteURL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setFavShops(res.data.favshops);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

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

  React.useEffect(() => {
    getSavedShops();
  }, [token]);
  // TODO add breadcrums in single product page
  // TODO add tabs in mobile view navigation
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

                {shop !== null ? (
                  <LeftPane
                    state={leftPane}
                    toggleDrawer={toggleDrawer}
                    shop={shop}
                    favShops={favShops}
                    setFavShops={setFavShops}
                  />
                ) : (
                  <div className={classes.searchbarPosition}>
                    <LeftPane
                      state={leftPane}
                      toggleDrawer={toggleDrawer}
                      // shop={shop}
                      // favShops={favShops}
                      // setFavShops={setFavShops}
                    />
                  </div>
                )}
              </Grid>
            </Grid>
          </div>
        </HomePageContainer>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <HeaderBar sticky />
          <ExploreProduct />
        </div>
      </div>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToProps)(HomePage);
