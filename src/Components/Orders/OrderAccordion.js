import React from "react";

// Material UI Imports
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { ThemeProvider } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";

//Default Theme
import theme from "../../consts/theme";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    marginLeft: "5vh",
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
      margin: "1.5vh 0",
    },
  },
  expanded: {},
  expandIcon: {},
})(MuiAccordionSummary);

export default function OrderAccordion() {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ marginTop: "1.5vh" }}
      >
        <Grid item xs={11}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
              >
                <Grid item xs={4}>
                  <Typography className={classes.heading}>
                    Manav Stores
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Box borderColor="transparent" className={classes.rating}>
                    <Rating name="read-only" value={1} readOnly />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Typography className={classes.secondaryHeading}>
                    &#8377;648
                  </Typography>
                  <Typography className={classes.secondaryHeading}>
                    Invoice
                  </Typography>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
              >
                <Grid item xs={4}>
                  <Typography className={classes.heading}>
                    Khushi Stores
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Box borderColor="transparent" className={classes.rating}>
                    <Rating name="read-only" value={4} readOnly />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Typography className={classes.secondaryHeading}>
                    &#8377;648
                  </Typography>
                  <Typography className={classes.secondaryHeading}>
                    Invoice
                  </Typography>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
              >
                <Grid item xs={4}>
                  <Typography className={classes.heading}>
                    Avanya Stores
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Box borderColor="transparent" className={classes.rating}>
                    <Rating name="read-only" value={3} readOnly />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Typography className={classes.secondaryHeading}>
                    &#8377;648
                  </Typography>
                  <Typography className={classes.secondaryHeading}>
                    Invoice
                  </Typography>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
              >
                <Grid item xs={4}>
                  <Typography className={classes.heading}>
                    Aashutosh Stores
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Box borderColor="transparent" className={classes.rating}>
                    <Rating name="read-only" value={2} readOnly />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Typography className={classes.secondaryHeading}>
                    &#8377;648
                  </Typography>
                  <Typography className={classes.secondaryHeading}>
                    Invoice
                  </Typography>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
