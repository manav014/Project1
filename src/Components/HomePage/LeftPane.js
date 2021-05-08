import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Fade from "@material-ui/core/Fade";
import Popper from "@material-ui/core/Popper";
import Divider from "@material-ui/core/Divider";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ShareIcon from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ExploreIcon from "@material-ui/icons/Explore";
import DirectionsIcon from "@material-ui/icons/Directions";
import Tooltip from "@material-ui/core/Tooltip";
import CheckIcon from "@material-ui/icons/Check";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import RateReviewIcon from "@material-ui/icons/RateReview";
import MuiChip from "@material-ui/core/Chip";
import Link from "@material-ui/core/Link";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import Paper from "@material-ui/core/Paper";

// HomePage imports
import CustomDropdown from "./CustomDropdown";
import SearchBar from "./SearchBar";
import ProductsTab from "./ProductsTab";
// Asset imports
import banner_image from "../../assets/HomePage/levis.jpg";
import styles from "../../styles/js/HomePage/LeftPaneStyle.js";

// Making styles
const useStyles = makeStyles(styles);

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
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

const CustomDrawer = withStyles({
  paperAnchorLeft: { width: "28.5vw" },
})(SwipeableDrawer);

const ReviewChip = withStyles({
  icon: { color: "#37b3f9 !important" },
})(MuiChip);
// TODO: make category dropdown functional and working
// TODO: Add modal and search suggestions
// main functional component start
function LeftPane() {
  //Accordion Style
  const preventDefault = (event) => event.preventDefault();
  const [count, setCount] = React.useState(0);

  const add = () => {
    setCount(count + 1);
  };
  const subtract = () => {
    if (count <= 0) {
      setCount(0);
    } else setCount(count - 1);
  };

  // Basic styles class
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const anchor = "left";

  return (
    <React.Fragment key={anchor}>
      <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
      <CustomDrawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
        onOpen={toggleDrawer(anchor, true)}
      >
        <div style={{ backgroundColor: "#F4F5F5" }}>
          <Card>
            <div className={classes.searchbarPlacement}>
              <SearchBar />
            </div>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Shop"
                height="200"
                image={banner_image}
                style={{ display: "flex" }}
              ></CardMedia>
            </CardActionArea>
          </Card>
          <div style={{ display: "flex" }}>
            <div variant="h5" component="h2" className={classes.shopName}>
              Aggarwal Store
            </div>
            <Box
              component="fieldset"
              borderColor="transparent"
              className={classes.rating}
            >
              <Rating name="read-only" value={1} />
            </Box>
          </div>
          <div className={classes.timing}>Open Now - 11:00 AM - 11:00 PM</div>
          <Divider variant="middle" />
          <Grid
            container
            style={{
              alignContent: "center",
              justifyItems: "center",
              marginTop: "15px",
            }}
          >
            <Grid item>
              <Tooltip title="Open Now">
                <Box
                  borderRadius="50px"
                  border={1}
                  className={classes.iconStyle}
                >
                  <IconButton aria-label="ShopStatus" color="37b3f9">
                    <CheckIcon style={{ color: "#37b3f9" }} />
                  </IconButton>
                </Box>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Save">
                <Box
                  borderRadius="50px"
                  border={1}
                  className={classes.iconStyle}
                >
                  <IconButton aria-label="SaveShop">
                    <BookmarkIcon style={{ color: "#37b3f9" }} />
                  </IconButton>
                </Box>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Directions">
                <Box
                  borderRadius="50px"
                  border={1}
                  className={classes.iconStyle}
                >
                  <IconButton aria-label="Directions">
                    <DirectionsIcon style={{ color: "#37b3f9" }} />
                  </IconButton>
                </Box>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Share">
                <Box
                  borderRadius="50px"
                  border={1}
                  className={classes.iconStyle}
                >
                  <IconButton aria-label="ShareShop">
                    <ShareIcon style={{ color: "#37b3f9" }} />
                  </IconButton>
                </Box>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Explore all Products">
                <Box
                  borderRadius="50px"
                  border={1}
                  className={classes.iconStyle}
                >
                  <IconButton aria-label="ExploreShop">
                    <ExploreIcon style={{ color: "#37b3f9" }} />
                  </IconButton>
                </Box>
              </Tooltip>
            </Grid>
          </Grid>
          <Divider
            variant="middle"
            style={{
              marginTop: "15px",
            }}
          />
          <div style={{ marginTop: "2vh", marginBottom: "2vh" }}>
            <CustomDropdown
              buttonText="Choose a Category"
              buttonProps={{
                className: classes.navLink,
                color: "transparent",
              }}
              dropdownList={["Breads", "Dal", "Dairy", "Flour"]}
            />
          </div>
          <div>
            <Accordion>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Breads</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <Link href="#" onClick={preventDefault}>
                    Whole Wheat Bread
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
            <Accordion>
              <AccordionSummary
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Dal</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <Link href="#" onClick={preventDefault}>
                    Bakwaas Daal
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
              <AccordionDetails>
                <Typography>
                  <Link href="#" onClick={preventDefault}>
                    Tasty Daal
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
            <Accordion>
              <AccordionSummary
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography>Dairy Products</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <Link href="#" onClick={preventDefault}>
                    Gaaye ka Doodh
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
              <AccordionDetails>
                <Typography>
                  <Link href="#" onClick={preventDefault}>
                    Amul ButterMilk
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
            <Accordion>
              <AccordionSummary
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography>Electronics</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <Link href="#" onClick={preventDefault}>
                    Gaaye ka Doodh
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
              <AccordionDetails>
                <Typography>
                  <Link href="#" onClick={preventDefault}>
                    Amul ButterMilk
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
          </div>

          <div className={classes.bestdeals}>BEST DEALS</div>
          <div style={{ marginTop: "2vh" }}>
            <ProductsTab></ProductsTab>
          </div>
          <Divider variant="middle" />
          <ListItem>
            <ReviewChip
              onClick={preventDefault}
              variant="outlined"
              icon={<RateReviewIcon />}
              label={"Write a Review"}
              className={classes.chip}
            />
          </ListItem>
          <Box boxShadow={2} className={classes.reviewcontainer} m={1} p={1}>
            <div className={classes.reviewname}>Avanya Wadhwa</div>
            <div className={classes.review2}>Local Guid - 219 reviews</div>
            <div className={classes.reviewtext}>
              I think this is the best website ever build.
            </div>
          </Box>
          <Box boxShadow={2} className={classes.reviewcontainer} m={1} p={1}>
            <div className={classes.reviewname}>Manav Agarwal</div>
            <div className={classes.review2}>Student - 719 reviews</div>
            <div className={classes.reviewtext}>
              Upar wali comment ko ignore krein.
            </div>
          </Box>
          <ListItem>
            <Typography className={classes.morereviews}>
              <Link
                href="#"
                onClick={preventDefault}
                style={{ color: "#37b3f9" }}
              >
                More Reviews (1,673)
              </Link>
            </Typography>
          </ListItem>
        </div>
      </CustomDrawer>
    </React.Fragment>
  );
}
// main functional component end
export default LeftPane;
