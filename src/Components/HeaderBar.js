import React from "react";

// Libraries
import classNames from "classnames";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

// @material-ui components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Menu from "@material-ui/icons/Menu";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import List from "@material-ui/core/List";
import { ThemeProvider } from "@material-ui/core/styles";
import LoopIcon from "@material-ui/icons/Loop";

// local components
import HeaderBarDropdown from "./HeaderBar/HeaderBarDropdown";
import styles from "../styles/js/HomePage/HeaderBarStyle.js";
import { fetchCart } from "../store/actions/cart";
import theme from "../consts/theme";

const useStyles = makeStyles(styles);

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);
function userMenu(view) {
  return (
    <List>
      <HeaderBarDropdown view={view} />
    </List>
  );
}
function HeaderBar(props) {
  let history = useHistory();
  function handleClick() {
    history.push("/cart");
  }
  function GoToHome() {
    history.push("/");
  }
  const { fixed, absolute, sticky, bottom, token, cart, loading } = props;

  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  React.useEffect(() => {
    props.fetchCart();
  }, [token]);
  React.useEffect(() => {
    window.addEventListener("scroll", headerColorChange);
    return function cleanup() {
      window.removeEventListener("scroll", headerColorChange);
    };
  });
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const headerColorChange = () => {
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > 1000) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes.sticky);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes.fixed);
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes.sticky);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes.fixed);
    }
  };
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,
    [classes.sticky]: sticky,
    [classes.bottom]: bottom,
  });
  const brandComponent = (
    <Button className={classes.title} onClick={GoToHome}>
      {"Blah Project"}
    </Button>
  );
  return (
    <ThemeProvider theme={theme}>
      <AppBar className={appBarClasses}>
        <Toolbar className={classes.container}>
          <IconButton aria-label="logo">
            <LocalMallIcon />
          </IconButton>
          <div className={classes.flex}>{brandComponent}</div>
          <Hidden smDown implementation="css">
            {userMenu("smDown")}
          </Hidden>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
            >
              <Menu />
            </IconButton>
          </Hidden>
          {token ? (
            <IconButton aria-label="cart" onClick={handleClick}>
              <StyledBadge
                badgeContent={
                  cart ? (
                    cart.total_products_quantity ? (
                      cart.total_products_quantity
                    ) : (
                      "0"
                    )
                  ) : loading ? (
                    <LoopIcon color="disabled" />
                  ) : (
                    "error"
                  )
                }
                color="secondary"
              >
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          ) : (
            <div></div>
          )}
        </Toolbar>
        <Hidden mdUp implementation="js">
          <Drawer
            variant="temporary"
            anchor={"right"}
            open={mobileOpen}
            classes={{
              paper: classes.drawerPaper,
            }}
            onClose={handleDrawerToggle}
          >
            <div className={classes.appResponsive}>{userMenu("mdUp")}</div>
          </Drawer>
        </Hidden>
      </AppBar>
    </ThemeProvider>
  );
}

HeaderBar.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark",
  ]),
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  sticky: PropTypes.bool,
  bottom: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
  }),
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    cart: state.cart.shoppingCart,
    loading: state.cart.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCart: () => dispatch(fetchCart()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);
