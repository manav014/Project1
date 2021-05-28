import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components

// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import MuiAccordion from "@material-ui/core/Accordion";
import Typography from "@material-ui/core/Typography";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Popper from "@material-ui/core/Popper";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../consts/theme";
// core components
import styles from "../../styles/js/HomePage/customDropdownStyle.js";

const useStyles = makeStyles(styles);

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    position: "static",
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);
export default function CustomDropdown(props) {
  const preventDefault = (event) => event.preventDefault();
  // TODO add transition on according expanding
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
  };
  const handleCloseAway = (event) => {
    if (anchorEl.contains(event.target)) {
      return;
    }
    setAnchorEl(null);
  };
  const dropdownList = ["Breads", "Dal", "Dairy", "Flour"];

  const classes = useStyles();
  const caretClasses = classNames({
    [classes.caret]: true,
    [classes.caretActive]: Boolean(anchorEl),
  });
  const add = () => {
    setCount(count + 1);
  };
  const subtract = () => {
    if (count <= 0) {
      setCount(0);
    } else setCount(count - 1);
  };
  const [count, setCount] = React.useState(0);
  const [state, setState] = React.useState({
    Breads: false,
    Dal: false,
    Dairy: false,
    Flour: false,
  });
  const handleChange = (prop) => {
    setState({ ...state, [prop]: true });
  };
  const handleAccordianChange = (prop) => (event, newExpanded) => {
    if (newExpanded === true) {
      setState({ ...state, [prop]: true });
    } else {
      setState({ ...state, [prop]: false });
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Paper
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
          }}
          color="primary"
          elevation={0}
        >
          <Button onClick={handleClick}>
            Choose a Category
            <b className={caretClasses} />
          </Button>
        </Paper>
        <Popper
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          transition
          disablePortal
          className={classNames({
            [classes.popperClose]: !anchorEl,
            [classes.popperResponsive]: true,
          })}
        >
          {() => (
            <Grow in={Boolean(anchorEl)} style={{ transformOrigin: "0 0 0" }}>
              <Paper className={classes.dropdown}>
                <ClickAwayListener onClickAway={handleCloseAway}>
                  <MenuList role="menu" className={classes.menuList}>
                    {dropdownList.map((prop, key) => {
                      return (
                        <MenuItem
                          key={key}
                          onClick={() => {
                            handleClose();
                            handleChange(prop);
                          }}
                          className={classNames(
                            classes.dropdownItem,
                            classes["primaryHover"]
                          )}
                        >
                          {prop}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        <div>
          {dropdownList.map((element) => {
            return (
              <Accordion
                expanded={state[element]}
                onChange={handleAccordianChange(element)}
              >
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{element}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <Link href="#" onClick={preventDefault}>
                      {element}
                    </Link>
                    <div style={{ display: "flex" }}>
                      <div
                        style={{
                          fontSize: "13px",
                          lineHeight: "15px",
                          display: "flex",
                        }}
                      >
                        &#8377;
                        <div style={{ marginLeft: "1px" }}>21</div>
                      </div>
                      <div
                        style={{
                          fontSize: "13px",
                          lineHeight: "15px",
                          textDecoration: "line-through",
                          color: "#777777",
                          marginLeft: "5px",
                          display: "flex",
                        }}
                      >
                        &#8377; <div style={{ marginLeft: "1px" }}>25</div>
                      </div>
                    </div>
                  </Typography>

                  <ButtonGroup
                    style={{
                      position: "absolute",
                      right: "1vw",
                    }}
                  >
                    <RemoveCircleIcon
                      onClick={subtract}
                      style={{ color: "#37b3f9", cursor: "pointer" }}
                    ></RemoveCircleIcon>

                    <div
                      style={{
                        minWidth: "15px",
                        marginLeft: "1px",
                        textAlign: "center",
                      }}
                    >
                      {count}
                    </div>

                    <AddCircleIcon
                      onClick={add}
                      style={{ color: "#37b3f9", cursor: "pointer" }}
                    ></AddCircleIcon>
                  </ButtonGroup>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <Link href="#" onClick={preventDefault}>
                      Maida Wali Bread
                    </Link>
                    <div style={{ display: "flex" }}>
                      <div
                        style={{
                          fontSize: "13px",
                          lineHeight: "15px",
                          display: "flex",
                        }}
                      >
                        &#8377; <div style={{ marginLeft: "1px" }}>21</div>
                      </div>
                      <div
                        style={{
                          fontSize: "13px",
                          lineHeight: "15px",
                          textDecoration: "line-through",
                          color: "#777777",
                          marginLeft: "5px",
                          display: "flex",
                        }}
                      >
                        &#8377; <div style={{ marginLeft: "1px" }}>25</div>
                      </div>
                    </div>
                  </Typography>

                  <ButtonGroup
                    style={{
                      position: "absolute",
                      right: "1vw",
                    }}
                  >
                    <RemoveCircleIcon
                      onClick={subtract}
                      style={{ color: "#37b3f9", cursor: "pointer" }}
                    ></RemoveCircleIcon>

                    <div
                      style={{
                        minWidth: "15px",
                        marginLeft: "1px",
                        textAlign: "center",
                      }}
                    >
                      {count}
                    </div>

                    <AddCircleIcon
                      onClick={add}
                      style={{ color: "#37b3f9", cursor: "pointer" }}
                    ></AddCircleIcon>
                  </ButtonGroup>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </div>
    </ThemeProvider>
  );
}
