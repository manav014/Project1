import React, { useEffect, createRef, useState } from "react";

// Libraries
import classNames from "classnames";
import axios from "axios";
import { connect } from "react-redux";

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
import LoopIcon from "@material-ui/icons/Loop";

// local components
import theme from "../../consts/theme";
import { fetchCart } from "../../store/actions/cart";
import styles from "../../styles/js/HomePage/customDropdownStyle.js";
import {
  ProductSearchWithCategory,
  removeFromCartURL,
  addToCartURL,
} from "../../consts/constants";

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

function CustomDropdown(props) {
  const { token, fetchCart } = props;
  const [categoryRefs, setCategoryRefs] = useState([]);
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
  const handleCloseAway = (event) => {
    if (anchorEl.contains(event.target)) {
      return;
    }
    setAnchorEl(null);
  };
  var categoryList = props.category;
  categoryList = categoryList.replaceAll('"', "");
  categoryList = categoryList.replace("[", "");
  var pos = categoryList.lastIndexOf("]");
  categoryList =
    categoryList.substring(0, pos) + "" + categoryList.substring(pos + 1);

  var dropdownList = categoryList.split(",");

  const classes = useStyles();
  const [cartLoading, setcartLoading] = useState(false);

  const caretClasses = classNames({
    [classes.caret]: true,
    [classes.caretActive]: Boolean(anchorEl),
  });

  const add = (slug, cslug, k) => {
    setcartLoading(true);
    axios
      .post(
        addToCartURL,
        { pslug: slug },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          productDetails[cslug][k].cart_value = res.data.quantity;
          setcartLoading(false);
          fetchCart();
        }
      })
      .catch((err) => {
        console.log("not added ");
        console.log(err.response);
      });
  };
  const subtract = (slug, cslug, k) => {
    setcartLoading(true);
    axios
      .post(
        removeFromCartURL,
        {
          pslug: slug,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          productDetails[cslug][k].cart_value = res.data.quantity;
          setcartLoading(false);
          fetchCart();
        }
      })
      .catch((err) => {
        console.log("Error");
        setcartLoading(false);
      });
  };

  var defaultState = {};
  dropdownList.map((ele) => {
    defaultState[ele] = false;
    return null;
  });
  const [state, setState] = React.useState(defaultState);
  const hadleOpenAccordion = (prop, key) => {
    setState({ ...state, [prop]: true });
  };
  const handleAccordianChange =
    (key, element, sslug) => (event, newExpanded) => {
      if (newExpanded === true) {
        setState({ ...state, [element]: true });
        key !== -1
          ? handleProductCategory(key, sslug, element)
          : handleProductCategory(-1, sslug, element);
      } else {
        setState({ ...state, [element]: false });
      }
    };
  const handleProductCategory = (key, sslug, cslug) => {
    axios
      .get(ProductSearchWithCategory(sslug, cslug), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setProductDetails({ ...productDetails, [cslug]: res.data });
        setLoading(false);
        if (key !== -1) {
          categoryRefs[key].current.scrollIntoView({
            behavior: "smooth",
            block: "start",
            alignToTop: 0,
          });
          hadleOpenAccordion(cslug);
          setAnchorEl(null);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        //TODO Error
      });
  };

  useEffect(() => {
    setCategoryRefs([]);
    setProductDetails({});
    setAnchorEl(null);
    categoryList = props.category;
    categoryList = categoryList.replaceAll('"', "");
    categoryList = categoryList.replace("[", "");
    pos = categoryList.lastIndexOf("]");
    categoryList =
      categoryList.substring(0, pos) + "" + categoryList.substring(pos + 1);
    dropdownList = categoryList.split(",");
    defaultState = {};
    dropdownList.map((ele) => {
      defaultState[ele] = false;
      return null;
    });
    setState(defaultState);
    setCategoryRefs((categoryRefs) =>
      Array(dropdownList.length)
        .fill()
        .map((_, i) => categoryRefs[i] || createRef())
    );
  }, [dropdownList.length, props.shopSlug]);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Paper
          variant="outlined"
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
          }}
          elevation={0}
        >
          <Button onClick={handleClick} className={classes.buttonPadding}>
            Choose a Category
            <b className={caretClasses} />
          </Button>
        </Paper>
        <Popper
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          disablePortal
          className={classNames({
            [classes.popperClose]: !anchorEl,
            [classes.popperResponsive]: true,
          })}
        >
          <Grow in={Boolean(anchorEl)}>
            <Paper className={classes.dropdown}>
              <ClickAwayListener onClickAway={handleCloseAway}>
                <MenuList role="menu" className={classes.menuList}>
                  {dropdownList.map((prop, key) => {
                    return (
                      <MenuItem
                        key={key}
                        onClick={() => {
                          handleAccordianChange(
                            key,
                            prop,
                            props.shopSlug
                          )("adsf", true);
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
        </Popper>
        <div>
          {dropdownList.map((element, key) => (
            <div ref={categoryRefs[key]} key={key}>
              <Accordion
                expanded={state[element]}
                onChange={handleAccordianChange(-1, element, props.shopSlug)}
              >
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{element}</Typography>
                </AccordionSummary>

                {loading && !productDetails[element] ? (
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
                ) : (
                  <div>
                    {productDetails[element] &&
                    productDetails[element].length !== 0 ? (
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
                                <div style={{ marginLeft: "1px" }}>
                                  {e.seller_price}
                                </div>
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
                                &#8377;
                                <div style={{ marginLeft: "1px" }}>
                                  {e.product.mrp}
                                </div>
                              </div>
                            </div>
                          </Typography>
                          {token ? (
                            <ButtonGroup
                              style={{
                                position: "absolute",
                                right: "1vw",
                              }}
                            >
                              {cartLoading ? (
                                <LoopIcon color="disabled" />
                              ) : (
                                <RemoveCircleIcon
                                  onClick={() => subtract(e.slug, element, k)}
                                  style={{
                                    color: "#37b3f9",
                                    cursor: "pointer",
                                  }}
                                ></RemoveCircleIcon>
                              )}

                              <div
                                style={{
                                  minWidth: "15px",
                                  marginLeft: "1px",
                                  textAlign: "center",
                                }}
                              >
                                {e.cart_value}
                              </div>
                              {cartLoading ? (
                                <LoopIcon color="disabled" />
                              ) : (
                                <AddCircleIcon
                                  onClick={() => add(e.slug, element, k)}
                                  style={{
                                    color: "#37b3f9",
                                    cursor: "pointer",
                                  }}
                                ></AddCircleIcon>
                              )}
                            </ButtonGroup>
                          ) : (
                            <div></div>
                          )}
                        </AccordionDetails>
                      ))
                    ) : (
                      <AccordionDetails>
                        <Typography>No Items present under this</Typography>
                      </AccordionDetails>
                    )}
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
const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCart: () => dispatch(fetchCart()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CustomDropdown);
