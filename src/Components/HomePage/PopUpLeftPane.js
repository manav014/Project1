// import React from "react";
// import { makeStyles, createStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import Popper from "@material-ui/core/Popper";
// import PopupState, { bindToggle, bindPopper } from "material-ui-popup-state";
// import Fade from "@material-ui/core/Fade";
// import Paper from "@material-ui/core/Paper";

// const useStyles = makeStyles((theme) =>
//   createStyles({
//     typography: {
//       padding: theme.spacing(2),
//     },
//   })
// );

// export default function PopperPopupState() {
//   const classes = useStyles();

//   return (
//     <PopupState variant="popper" popupId="demo-popup-popper">
//       {(popupState) => (
//         <div>
//           <Button
//             variant="contained"
//             color="primary"
//             {...bindToggle(popupState)}
//           >
//             Toggle Popper
//           </Button>
//           <Popper {...bindPopper(popupState)} transition>
//             {({ TransitionProps }) => (
//               <Fade {...TransitionProps} timeout={350}>
//                 <Paper>
//                   <Typography className={classes.typography}>
//                     The content of the Popper.
//                   </Typography>
//                 </Paper>
//               </Fade>
//             )}
//           </Popper>
//         </div>
//       )}
//     </PopupState>
//   );
// }
import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Divider from "@material-ui/core/Divider";
import Popper from "@material-ui/core/Popper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// core components
import Button from "@material-ui/core/Button";
import styles from "../../styles/js/HomePage/customDropdownStyle";
import maggi from "../../assets/HomePage/maggi.png";
const useStyles = makeStyles(styles);

export default function HeaderBarDropdown(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleProductClick = (event) => {
    if (anchorEl && anchorEl.contains(event.target)) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleCloseAway = (event) => {
    if (anchorEl.contains(event.target)) {
      return;
    }
    setAnchorEl(null);
  };
  const classes = useStyles();
  const { dropup, left, rtlActive, noLiPadding } = props;

  return (
    <div>
      <Button
        aria-label="Notifications"
        aria-owns={anchorEl ? "menu-list" : null}
        aria-haspopup="true"
        color="transparent"
        onClick={handleProductClick}
      >
        Click Me
      </Button>
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
                  <Grid container>
                    <Grid item>
                      <img
                        src={maggi}
                        alt=""
                        style={{ height: "20vh", width: "10vw" }}
                      />
                    </Grid>
                    <Grid item>
                      <Divider orientation="vertical" />
                    </Grid>
                    <Grid item style={{ marginLeft: "1vw" }}>
                      <Typography variant="h5">Maggi</Typography>
                      <Typography>
                        Le Lo re Lelo Tazzi Maggi
                        <br></br> lelo bas 12 rupey mai!
                      </Typography>
                    </Grid>
                  </Grid>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
