import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
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
import TextField from "@material-ui/core/TextField";

import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import Paper from "@material-ui/core/Paper";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

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

const CustomDrawer = withStyles((theme) => ({
  paperAnchorLeft: {

    width: "100vw",

    [theme.breakpoints.up(1400 + theme.spacing(3) * 2)]: {
      width: "28.5vw",
    },
    [theme.breakpoints.down(1400 + theme.spacing(3) * 2)]: {
      width: "32vw",
    },
    [theme.breakpoints.down(1250 + theme.spacing(3) * 2)]: {
      width: "35vw",
    },
    [theme.breakpoints.down(1200 + theme.spacing(3) * 2)]: {
      width: "38vw",
    },
    [theme.breakpoints.down(1100 + theme.spacing(3) * 2)]: {
      width: "40vw",
    },
    [theme.breakpoints.down(1000 + theme.spacing(3) * 2)]: {
      width: "44vw",
    },
    [theme.breakpoints.down(950 + theme.spacing(3) * 2)]: {
      width: "50vw",
    },
    [theme.breakpoints.down(950 + theme.spacing(3) * 2)]: {
      width: "50vw",
    },
    [theme.breakpoints.down(850 + theme.spacing(3) * 2)]: {
      width: "54vw",
    },
    [theme.breakpoints.down(800 + theme.spacing(3) * 2)]: {
      width: "56vw",
    },
    [theme.breakpoints.down(750 + theme.spacing(3) * 2)]: {
      width: "60vw",
    },
    [theme.breakpoints.down(700 + theme.spacing(3) * 2)]: {
      width: "65vw",
    },
    [theme.breakpoints.down(650 + theme.spacing(3) * 2)]: {
      width: "70vw",
    },
    [theme.breakpoints.down(600 + theme.spacing(3) * 2)]: {
      width: "75vw",
    },
    [theme.breakpoints.down(550 + theme.spacing(3) * 2)]: {
      width: "80vw",
    },
    [theme.breakpoints.down(500 + theme.spacing(3) * 2)]: {
      width: "100vw",
    },
  },
}))(Drawer);

const ReviewChip = withStyles({
  icon: { color: "#37b3f9 !important" },
})(MuiChip);
// TODO: make category dropdown functional and working
// TODO: Add modal and search suggestions
// main functional component start
function LeftPane() {
  //Accordion Style
  const preventDefault = (event) => event.preventDefault();
  const [value, setValue] = React.useState(2);
  const [count, setCount] = React.useState(0);
  const [openmodal, setOpenModal] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

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
        disableSwipeToOpen={true}
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
              <Rating name="read-only" value={1} readOnly />
            </Box>
          </div>
          <div className={classes.timing}>Open Now - 11:00 AM - 11:00 PM</div>
          <Divider variant="middle" />
          <div>
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
          </div>
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
              onClick={handleClickOpen}
              variant="outlined"
              icon={<RateReviewIcon />}
              label={"Write a Review"}
              className={classes.chip}
            />
          </ListItem>
          <Paper className={classes.paper} elevation={2}>
            <Typography
              variant="h6"
              gutterBottom
              className={classes.reviewname}
            >
              From Customers
            </Typography>
            <Divider variant="left" />

            <Typography
              variant="h6"
              gutterBottom
              className={classes.reviewname}
            >
              Avanya Wadhwa
            </Typography>
            <Typography gutterBottom className={classes.review2}>
              Local Guid - 219 reviews
            </Typography>
            <Typography gutterBottom className={classes.reviewtext}>
              I think this is the best website ever build.
            </Typography>
            <Divider variant="middle" />
            <Typography
              variant="h6"
              gutterBottom
              className={classes.reviewname}
            >
              Manav Agarwal
            </Typography>
            <Typography gutterBottom className={classes.review2}>
              Student - 719 reviews
            </Typography>
            <Typography gutterBottom className={classes.reviewtext}>
              Upar wali comment ko ignore krein.
            </Typography>
            <Divider variant="middle" />
            <Typography
              variant="h6"
              gutterBottom
              className={classes.reviewname}
            >
              Avanya Wadhwa
            </Typography>
            <Typography gutterBottom className={classes.review2}>
              Local Guid - 219 reviews
            </Typography>
            <Typography gutterBottom className={classes.reviewtext}>
              I think this is the best website ever build.
            </Typography>
            <Divider variant="middle" />
            <Typography
              variant="h6"
              gutterBottom
              className={classes.reviewname}
            >
              Manav Agarwal
            </Typography>
            <Typography gutterBottom className={classes.review2}>
              Student - 719 reviews
            </Typography>
            <Typography gutterBottom className={classes.reviewtext}>
              Upar wali comment ko ignore krein.
            </Typography>
            <Divider variant="middle" />
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
          </Paper>
          <Dialog
            fullScreen={fullScreen}
            maxWidth={"sm"}
            open={openmodal}
            fullWidth={true}
            onClose={handleClose}
          >
            <div
              id="responsive-dialog-title"
              style={{
                textAlign: "center",
                fontSize: "1.7rem",
                fontWeight: "400",
                marginTop: "2vh",
              }}
            >
              {"Aggarwal Store"}
            </div>
            <DialogContent>
              <div style={{ fontSize: "1.1rem", fontWeight: "500" }}>
                AVANYA WADHWA
              </div>
              <DialogContentText>Posting Publically</DialogContentText>
              <DialogContentText>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </DialogContentText>
              <DialogContentText>
                <FormControl fullWidth>
                  <TextField
                    id="outlined-full-width"
                    label="Label"
                    style={{ margin: 8 }}
                    placeholder="Placeholder"
                    fullWidth="true"
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />{" "}
                </FormControl>
              </DialogContentText>
            </DialogContent>
            <DialogActions style={{ height: "5vh" }}>
              <Button
                autoFocus
                className={classes.onHover}
                onClick={handleClose}
                style={{ color: "#37b3f9" }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleClose}
                className={classes.onHover}
                autoFocus
                style={{ color: "#37b3f9" }}
              >
                Post
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </CustomDrawer>
    </React.Fragment>
  );
}
// main functional component end
export default LeftPane;
