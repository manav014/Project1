import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
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
import ExploreIcon from "@material-ui/icons/Explore";
import DirectionsIcon from "@material-ui/icons/Directions";
import Tooltip from "@material-ui/core/Tooltip";
import CheckIcon from "@material-ui/icons/Check";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import CustomDropdown from "./CustomDropdown";
import SearchBar from "./SearchBar";

import "../../styles/css/LeftPaneStyle.css";
import banner_image from "../bg2.png";
import styles from "../../styles/js/HomePage/LeftPaneStyle.js";

const useStyles = makeStyles(styles);

const accordionStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

function LeftPane() {
  //Accordion Style
  const accordionnClasses = accordionStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  // Basic styles class
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [value, setValue] = React.useState(2);
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
      <SwipeableDrawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
        onOpen={toggleDrawer(anchor, true)}
        style={{ width: "600px" }}
      >
        <Card>
          <div className="searchbarPlacement">
            <SearchBar />
          </div>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={banner_image}
              style={{ display: "flex" }}
            ></CardMedia>
          </CardActionArea>
        </Card>

        <Typography gutterBottom variant="h5" component="h2">
          Aggarwal Store
        </Typography>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Rating name="read-only" value={value} readOnly />
        </Box>
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
              <Box borderRadius="50px" border={1} className="icon-style">
                <IconButton
                  className="icon-style"
                  aria-label="search"
                  color="primary"
                  type="submit"
                  className={classes.iconButton}
                  aria-label="search"
                >
                  <CheckIcon />
                </IconButton>
              </Box>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Save">
              <Box borderRadius="50px" border={1} className="icon-style">
                <IconButton
                  className="icon-style"
                  aria-label="search"
                  color="primary"
                  type="submit"
                  className={classes.iconButton}
                  aria-label="search"
                >
                  <BookmarkIcon />
                </IconButton>
              </Box>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Directions">
              <Box borderRadius="50px" border={1} className="icon-style">
                <IconButton
                  className="icon-style"
                  aria-label="search"
                  color="primary"
                  type="submit"
                  className={classes.iconButton}
                  aria-label="search"
                >
                  <DirectionsIcon />
                </IconButton>
              </Box>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Share">
              <Box borderRadius="50px" border={1} className="icon-style">
                <IconButton
                  aria-label="search"
                  color="primary"
                  type="submit"
                  className={classes.iconButton}
                  aria-label="search"
                  color="primary"
                >
                  <ShareIcon />
                </IconButton>
              </Box>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Explore Products">
              <Box borderRadius="50px" border={1} className="icon-style">
                <IconButton
                  type="submit"
                  className={classes.iconButton}
                  aria-label="search"
                  color="primary"
                >
                  <ExploreIcon />
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
        <List>
          <CustomDropdown
            buttonText="Choose a Category"
            buttonProps={{
              className: classes.navLink,
              color: "transparent",
            }}
            dropdownList={["Breads", "Dal", "Dairy", "Flour"]}
          />
        </List>
        <div className={accordionnClasses.root}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={accordionnClasses.heading}>
                General settings
              </Typography>
              <Typography className={accordionnClasses.secondaryHeading}>
                I am an accordion
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography className={accordionnClasses.heading}>
                Users
              </Typography>
              <Typography className={accordionnClasses.secondaryHeading}>
                You are currently not an owner
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat
                lectus, varius pulvinar diam eros in elit. Pellentesque
                convallis laoreet laoreet.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography className={accordionnClasses.heading}>
                Advanced settings
              </Typography>
              <Typography className={accordionnClasses.secondaryHeading}>
                Filtering has been entirely disabled for whole web server
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography className={accordionnClasses.heading}>
                Personal data
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </SwipeableDrawer>
    </React.Fragment>
  );
}

export default LeftPane;
