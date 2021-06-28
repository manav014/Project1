import React from "react";

// @material-ui components
import {
  ThemeProvider,
  makeStyles,
  withStyles,
} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Box from "@material-ui/core/Box";
import Accordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AddBoxIcon from "@material-ui/icons/Add";

// local components
import product1 from "../../assets/HomePage/product1.png";
import dairy from "../../assets/HomePage/dairy.jpg";
import theme from "../../consts/theme";

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .09)",
    marginBottom: -1,
    "&$expanded": {
      minHeight: 52,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const useStyles = makeStyles((theme) => ({
  image: {
    width: 100,
    height: 100,
  },
  img: {
    // margin: "auto",
    // display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

function ShopOrderMobile() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12}>
          <Box bgcolor="grey.300" display="flex" justifyContent="center">
            <Typography variant="subtitle1">
              <b>Order No: 2223</b>
            </Typography>
          </Box>
          <Box m={1} p={1}>
            <Typography variant="body2">
              <b>Shipped To:</b> Khushi Rauniyar
            </Typography>
            <Typography variant="body2">
              <b> Store Name:</b> Khushi Store
            </Typography>
            <Typography variant="body2">
              <b>Number Of Items:</b> 4
            </Typography>
            <Typography variant="body2">
              <b>Gross Amount:</b> &#8377; 1345/-
            </Typography>
            <Typography variant="body2">
              <b>Discount:</b> &#8377; 400/-
            </Typography>
          </Box>
          <Box
            display="flex"
            bgcolor="grey.300"
            justifyContent="flex-end"
            m={1}
          >
            <Typography variant="subtitle1">
              Amount:<b> &#8377; 945/-</b>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <div>
            <Box border={1} m={1} p={2}>
              <Grid container spacing={2}>
                <Grid item xs>
                  <ButtonBase className={classes.image}>
                    <img alt="imag1e" className={classes.img} src={product1} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={7}>
                  <Typography variant="h6">
                    <b>Amul 100gm Cheese slices</b>
                  </Typography>
                  <Typography variant="body2">
                    <b>Quantity:</b> 2
                  </Typography>
                  <Typography variant="body2">
                    <b>Price:</b> &#8377; 400/-
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Accordion>
                    <AccordionSummary expandIcon={<AddBoxIcon />}>
                      More Details
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box m={1} p={1}>
                        <Typography variant="body2">
                          <b>MRP:</b> &#8377; 600/-
                        </Typography>
                        <Typography variant="body2">
                          <b> Our Price:</b> &#8377; 400/-
                        </Typography>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              </Grid>
            </Box>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div>
            <Box border={1} m={1} p={2}>
              <Grid container spacing={2}>
                <Grid item xs>
                  <ButtonBase className={classes.image}>
                    <img alt="1" className={classes.img} src={dairy} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={7}>
                  <Typography variant="h6">
                    <b>Amul 100gm Cheese slices</b>
                  </Typography>
                  <Typography variant="body2">
                    <b>Quantity:</b> 2
                  </Typography>
                  <Typography variant="body2">
                    <b>Price:</b> &#8377; 400/-
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Accordion>
                    <AccordionSummary expandIcon={<AddBoxIcon />}>
                      More Details
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box m={1} p={1}>
                        <Typography variant="body2">
                          <b>MRP:</b> &#8377; 600/-
                        </Typography>
                        <Typography variant="body2">
                          <b> Our Price:</b> &#8377; 400/-
                        </Typography>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              </Grid>
            </Box>
          </div>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default ShopOrderMobile;
