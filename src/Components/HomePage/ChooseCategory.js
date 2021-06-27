import React, { useEffect, createRef, useState } from "react";

// Libraries
import classNames from "classnames";

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
import Skeleton from "@material-ui/lab/Skeleton";
import Box from "@material-ui/core/Box";
import axios from "axios";
import { ProductSearchWithCategory } from "../../consts/constants";

// local components
import theme from "../../consts/theme";
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
  const [categoryRefs, setCategoryRefs] = React.useState([]);
  const [loading, setLoading] = useState(true);
  const [productDetails, setProductDetails] = useState({});

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
  const handleClose = (prop, key) => {
    categoryRefs[key].current.scrollIntoView({
      behavior: "smooth",
    });
    handleChange(prop);

    setAnchorEl(null);
    // console.log(categoryRefs[key].current.scrollIntoView );
  };
  const handleCloseAway = (event) => {
    if (anchorEl.contains(event.target)) {
      return;
    }
    setAnchorEl(null);
  };
  var categoryList = props.category;
  categoryList = categoryList.replaceAll('"', "");
  categoryList = categoryList.replace("[", "");
  categoryList = categoryList.replace("]", "");
  // console.log(categoryList);
  const dropdownList = categoryList.split(",");

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
  const handleChange = (prop, key) => {
    setState({ ...state, [prop]: true });
  };
  const handleForm = (key) => {
    categoryRefs[key].current.scrollIntoView({
      behavior: "smooth",
    });
  };
  const handleAccordianChange = (prop) => (event, newExpanded) => {
    if (newExpanded === true) {
      setState({ ...state, [prop]: true });
    } else {
      setState({ ...state, [prop]: false });
    }
  };
  const handleProductCategory = (sslug, cslug) => {
    setLoading(true);
    axios
      .get(ProductSearchWithCategory(sslug, cslug), {})
      .then((res) => {
        setProductDetails({ ...productDetails, [cslug]: res.data });
        setLoading(false);
        console.log(productDetails);
      })

      .catch((err) => {
        console.log(err);
        setLoading(false);
        //TODO Error
      });
  };

  useEffect(() => {
    setCategoryRefs((categoryRefs) =>
      Array(dropdownList.length)
        .fill()
        .map((_, i) => categoryRefs[i] || createRef())
    );
  }, [dropdownList.length]);

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
                            handleClose(prop, key);
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
          {dropdownList.map((element, key) => (
            <div ref={categoryRefs[key]}>
              <Accordion
                expanded={state[element]}
                onChange={handleAccordianChange(element)}
                onClick={() => handleProductCategory(props.shopSlug, element)}
              >
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{element}</Typography>
                </AccordionSummary>
                {!loading ? (
                  <div>
                    {console.log(productDetails[element])}
                    {productDetails[element] &&
                    productDetails[element] !== [] ? (
                      productDetails[element].map((e, k) => (
                        <AccordionDetails>
                          <Typography>
                            <Link href="#" onClick={preventDefault}>
                              {e.product.name}
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
                                &#8377;{" "}
                                <div style={{ marginLeft: "1px" }}>25</div>
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
                      ))
                    ) : (
                      <AccordionDetails>
                        <Typography>
                          <Link href="#" onClick={preventDefault}>
                            {element}
                          </Link>
                        </Typography>
                      </AccordionDetails>
                    )}
                  </div>
                ) : (
                  <div>
                    <Box width={300} marginLeft={2} marginRight={2} my={1}>
                      <Box pt={0.5}>
                        <Skeleton width="50%" />
                        <Skeleton />
                      </Box>
                    </Box>
                    <Box width={300} marginLeft={2} marginRight={2} my={1}>
                      <Box pt={0.5}>
                        <Skeleton width="50%" />
                        <Skeleton />
                      </Box>
                    </Box>
                  </div>
                )}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
}
