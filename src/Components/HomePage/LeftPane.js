import React from "react";

// @material-ui components
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
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import RateReviewIcon from "@material-ui/icons/RateReview";
import MuiChip from "@material-ui/core/Chip";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import { ThemeProvider } from "@material-ui/core/styles";

// local components
import CustomDropdown from "./ChooseCategory";
import SearchBar from "./SearchBar";
import ProductsTab from "./ProductsTab";
import banner_image from "../../assets/HomePage/levis.jpg";
import styles from "../../styles/js/HomePage/LeftPaneStyle.js";
import theme from "../../consts/theme";

// Making styles
const useStyles = makeStyles(styles);

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
function LeftPane(props) {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  const [value, setValue] = React.useState(2);
  const [openmodal, setOpenModal] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };
  const [save, setSave] = React.useState(true);

  const anchor = "left";

  console.log(props.shop.properties);

  return (
    <ThemeProvider theme={theme}>
      {props.shop ? (
        <React.Fragment key={anchor}>
          <CustomDrawer
            variant="permanent"
            disableSwipeToOpen={true}
            anchor={anchor}
            open={props.state[anchor]}
            onClose={props.toggleDrawer(anchor, false, null)}
            onOpen={props.toggleDrawer(anchor, true, null)}
          >
            <div style={{ backgroundColor: "#F4F5F5" }}>
              <div style={{ position: "relative" }}>
                <img
                  src={props.shop.properties.image}
                  alt=""
                  style={{
                    width: "100%",
                    height: "27vh",
                    objectFit: "cover",
                  }}
                />
                <div className={classes.searchbarPlacement}>
                  <SearchBar close={props.toggleDrawer(anchor, false)} />
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div variant="h5" component="h2" className={classes.shopName}>
                  {props.shop.properties.name}
                </div>
                <Box
                  component="fieldset"
                  borderColor="transparent"
                  className={classes.rating}
                >
                  <Rating
                    name="read-only"
                    value={props.shop.properties.rating}
                    readOnly
                  />
                </Box>
              </div>
              <div className={classes.timing}>
                Open Time - {props.shop.properties.open_time.slice(0, 5)} AM -{" "}
                {props.shop.properties.close_time.slice(0, 5)} PM
              </div>
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
                        <IconButton aria-label="ShopStatus">
                          <CheckIcon style={{ color: "#37b3f9" }} />
                        </IconButton>
                      </Box>
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    {save == true ? (
                      <Tooltip title="unsave">
                        <Box
                          borderRadius="50px"
                          border={1}
                          className={classes.iconStyle}
                        >
                          <IconButton
                            aria-label="SaveShop"
                            onClick={() => setSave(false)}
                          >
                            <BookmarkIcon style={{ color: "#37b3f9" }} />
                          </IconButton>
                        </Box>
                      </Tooltip>
                    ) : (
                      <Tooltip title="save">
                        <Box
                          borderRadius="50px"
                          border={1}
                          className={classes.iconStyle}
                        >
                          <IconButton
                            aria-label="SaveShop"
                            onClick={() => setSave(true)}
                          >
                            <BookmarkBorderIcon style={{ color: "#37b3f9" }} />
                          </IconButton>
                        </Box>
                      </Tooltip>
                    )}
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
              <div
                style={{
                  marginTop: "2vh",
                  marginBottom: "2vh",
                  position: "sticky",
                  zIndex: "1100",
                }}
              >
                <CustomDropdown />
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
                      />
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
      ) : (
        ""
      )}
    </ThemeProvider>
  );
}
// main functional component end
export default LeftPane;
