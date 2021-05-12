import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Divider from "@material-ui/core/Divider";
import Popper from "@material-ui/core/Popper";

// core components
import Button from "@material-ui/core/Button";
import SignIn from "./Login";
import SignUp from "./SignUp";
import styles from "../../styles/js/HomePage/customDropdownStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderBarDropdown(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    if (anchorEl && anchorEl.contains(event.target)) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = (param) => {
    setAnchorEl(null);
    if (props && props.onClick) {
      props.onClick(param);
    }
  };
  const handleCloseAway = (event) => {
    if (anchorEl.contains(event.target)) {
      return;
    }
    setAnchorEl(null);
  };
  const classes = useStyles();
  const { dropup, caret, hoverColor, left, rtlActive, noLiPadding } = props;
  const caretClasses = classNames({
    [classes.caret]: true,
    [classes.caretActive]: Boolean(anchorEl),
    [classes.caretRTL]: rtlActive,
  });
  const dropdownItem = classNames({
    [classes.dropdownItem]: true,
    [classes[hoverColor + "Hover"]]: true,
    [classes.noLiPadding]: noLiPadding,
    [classes.dropdownItemRTL]: rtlActive,
  });
  const [openlogin, setOpenlogin] = React.useState(false);
  const [opensignup, setOpensignup] = React.useState(false);
  const handleClickOpenlogin = () => {
    setOpenlogin(true);
  };
  const handleCloseDropdownlogin = () => {
    setOpenlogin(false);
  };
  const handleClickOpensignup = () => {
    setOpensignup(true);
  };

  const handleCloseDropdownsignup = () => {
    setOpensignup(false);
  };
  return (
    <div>
      <div>
        <Button
          aria-label="Notifications"
          aria-owns={anchorEl ? "menu-list" : null}
          aria-haspopup="true"
          color="transparent"
          onClick={handleClick}
        >
          {"My account"}
          {caret ? <b className={caretClasses} /> : null}
        </Button>
      </div>
      <Popper
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        transition
        disablePortal
        placement={
          dropup
            ? left
              ? "top-start"
              : "top"
            : left
            ? "bottom-start"
            : "bottom"
        }
        className={classNames({
          [classes.popperClose]: !anchorEl,
          [classes.popperResponsive]: true,
        })}
      >
        {() => (
          <Grow
            in={Boolean(anchorEl)}
            id="menu-list"
            style={
              dropup
                ? { transformOrigin: "0 100% 0" }
                : { transformOrigin: "0 0 0" }
            }
          >
            <Paper className={classes.dropdown}>
              <ClickAwayListener onClickAway={handleCloseAway}>
                <MenuList role="menu" className={classes.menuList}>
                  <MenuItem
                    key={1}
                    onClick={handleClickOpenlogin}
                    className={dropdownItem}
                  >
                    {"Login"}
                  </MenuItem>
                  <Divider
                    key={2}
                    // onClick={() => handleClose("divider")}
                    className={classes.dropdownDividerItem}
                  />
                  <MenuItem
                    key={3}
                    onClick={handleClickOpensignup}
                    className={dropdownItem}
                  >
                    {"Signup"}
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      <Dialog onClose={handleCloseDropdownlogin} open={openlogin}>
        <SignIn
          handleCloseDropdownlogin={handleCloseDropdownlogin}
          handleClickOpensignup={handleClickOpensignup}
        />
      </Dialog>
      <Dialog onClose={handleCloseDropdownsignup} open={opensignup}>
        <SignUp
          handleCloseDropdownsignup={handleCloseDropdownsignup}
          handleClickOpenlogin={handleClickOpenlogin}
        />
      </Dialog>
    </div>
  );
}

HeaderBarDropdown.defaultProps = {
  caret: true,
  hoverColor: "primary",
};
