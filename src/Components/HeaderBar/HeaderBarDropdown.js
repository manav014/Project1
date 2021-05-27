import React, { useState, useEffect } from "react";

// nodejs libraries
import classNames from "classnames";
import axios from "axios";
import { connect } from "react-redux";

// @material-ui components
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Divider from "@material-ui/core/Divider";
import Popper from "@material-ui/core/Popper";
import Button from "@material-ui/core/Button";

// local components
import { userDetailsURL } from "../../consts/constants";
import SignIn from "./Login";
import SignUp from "./SignUp";
import styles from "../../styles/js/HomePage/customDropdownStyle";
import * as actions from "../../store/actions/auth";

const useStyles = makeStyles(styles);

function HeaderBarDropdown(props) {
  const [anchorEl, setAnchorEl] = useState(null);
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
  const {
    dropup,
    caret,
    hoverColor,
    left,
    rtlActive,
    noLiPadding,
    authenticated,
    token,
  } = props;
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
  const [openlogin, setOpenlogin] = useState(false);
  const [opensignup, setOpensignup] = useState(false);
  const handleClickOpenlogin = () => {
    handleClose();
    setOpenlogin(true);
  };

  const handleCloseDropdownlogin = () => {
    setOpenlogin(false);
  };
  const handleClickOpensignup = () => {
    handleClose();
    setOpensignup(true);
  };

  const handleCloseDropdownsignup = () => {
    setOpensignup(false);
  };
  const [username, setUserName] = useState("");
  useEffect(() => {
    if (authenticated) {
      axios
        .get(userDetailsURL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setUserName(res.data.fname);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  }, [authenticated, token]);
  return (
    <div>
    { (props.view === "smDown") ?
    <div>
      <div>
        <Button
          aria-label="Notifications"
          aria-owns={anchorEl ? "menu-list" : null}
          aria-haspopup="true"
          onClick={handleClick}
        >
          {authenticated ? username : "Login/SignUp"}
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
                  {authenticated ? (
                    <div>
                      <MenuItem
                        key={1}
                        // onClick={handleClickOpenlogin}
                        className={dropdownItem}
                      >
                        {"Profile"}
                      </MenuItem>
                      <Divider
                        key={2}
                        // onClick={() => handleClose("divider")}
                        className={classes.dropdownDividerItem}
                      />{" "}
                      <MenuItem
                        key={3}
                        onClick={() => props.logout()}
                        className={dropdownItem}
                      >
                        {"Logout"}
                      </MenuItem>
                    </div>
                  ) : (
                    <div>
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
                    </div>
                  )}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
     </div>
    :
  <div>
     <MenuList role="menu" className={classes.menuList}>
                  {authenticated ? (
                    <div>
                      <MenuItem
                        key={1}
                        // onClick={handleClickOpenlogin}
                        className={dropdownItem}
                      >
                        {"PROFILE"}
                      </MenuItem>
                      <Divider
                        key={2}
                        // onClick={() => handleClose("divider")}
                        className={classes.dropdownDividerItem}
                      />{" "}
                      <MenuItem
                        key={3}
                        onClick={() => props.logout()}
                        className={dropdownItem}
                      >
                        {"LOGOUT"}
                      </MenuItem>
                    </div>
                  ) : (
                    <div>
                      <MenuItem
                        key={1}
                        onClick={handleClickOpenlogin}
                        className={dropdownItem}
                      >
                        {"LOGIN"}
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
                        {"SIGNUP"}
                      </MenuItem>
                    </div>
                  )}
                </MenuList>
  </div>
  }
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

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.token !== null,
    token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBarDropdown);
