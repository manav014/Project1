import React from "react";

// Libraries
import classNames from "classnames";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

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

// local components
import HeaderBarDropdown from "./HeaderBar/HeaderBarDropdown";
import styles from "../styles/js/HomePage/HeaderBarStyle.js";
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
export default function HeaderBar(props) {
  let history = useHistory();
  function handleClick() {
    history.push("/cart");
  }
  function GoToHome() {
    history.push("/");
  }
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
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
  const { fixed, absolute, sticky, bottom } = props;
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

          <IconButton aria-label="cart" onClick={handleClick}>
            <StyledBadge badgeContent={4} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
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
