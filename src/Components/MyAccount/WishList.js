import React from "react";
import PropTypes from "prop-types";

// @material-ui components
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Rating from "@material-ui/lab/Rating";
import { ThemeProvider } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

import Box from "@material-ui/core/Box";

// local components
import product1 from "../../assets/HomePage/product1.png";
import theme from "../../consts/theme";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },

  image: {
    maxHeight: 128,
    maxWidth: 128,
  },
  img: {
    margin: "auto",
    // display: "block",
    maxWidth: "70%",
    maxHeight: "70%",
  },
  wishlistDate: {
    fontSize: "0.6rem",
  },
}));

function WishList() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Typography component="h1" variant="h4" align="center">
          Your Wishlist
        </Typography>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Favourite Shop" {...a11yProps(0)} />
            <Tab label="Favourite Products" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={12} md={6}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Grid container>
                      <Grid item xs={4}>
                        <ButtonBase className={classes.image}>
                          <img
                            className={classes.img}
                            alt="complex"
                            src={product1}
                          />
                        </ButtonBase>
                      </Grid>
                      <Grid item xs={5}>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          style={{ fontWeight: "bold" }}
                        >
                          Khushi Multi Store
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="body2"
                          style={{ color: "grey" }}
                        >
                          Ghaziabad, UttarPradesh, 123432
                        </Typography>

                        <Rating name="read-only" value={3} readOnly />
                      </Grid>
                      <Grid item xs={3}>
                        <Grid container>
                          <Grid item>
                            <IconButton color="primary" aria-label="logo">
                              <ShoppingBasketIcon />
                            </IconButton>
                          </Grid>
                          <Grid item>
                            <IconButton color="primary" aria-label="logo">
                              <DeleteIcon />
                            </IconButton>
                          </Grid>
                        </Grid>
                        <div className={classes.wishlistDate}>
                          Added on 05.July.2021
                        </div>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Grid container>
                      <Grid item xs={4}>
                        <ButtonBase className={classes.image}>
                          <img
                            className={classes.img}
                            alt="complex"
                            src={product1}
                          />
                        </ButtonBase>
                      </Grid>
                      <Grid item xs={5}>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          style={{ fontWeight: "bold" }}
                        >
                          Khushi Multi Store
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="body2"
                          style={{ color: "grey" }}
                        >
                          Ghaziabad, UttarPradesh, 123432
                        </Typography>

                        <Rating name="read-only" value={3} readOnly />
                      </Grid>
                      <Grid item xs={3}>
                        <Grid container>
                          <Grid item>
                            <IconButton color="primary" aria-label="logo">
                              <ShoppingBasketIcon />
                            </IconButton>
                          </Grid>
                          <Grid item>
                            <IconButton color="primary" aria-label="logo">
                              <DeleteIcon />
                            </IconButton>
                          </Grid>
                        </Grid>
                        <div className={classes.wishlistDate}>
                          Added on 05.July.2021
                        </div>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container>
            <Grid item xs={6}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Grid container>
                      <Grid item xs={4}>
                        <ButtonBase className={classes.image}>
                          <img
                            className={classes.img}
                            alt="complex"
                            src={product1}
                          />
                        </ButtonBase>
                      </Grid>
                      <Grid item xs={5}>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          style={{ fontWeight: "bold" }}
                        >
                          Rice
                        </Typography>
                        <Rating
                          name="read-only"
                          value={3}
                          readOnly
                          size="small"
                        />
                        <div style={{ display: "flex" }}>
                          <Typography
                            variant="body2"
                            gutterBottom
                            style={{
                              fontWeight: "bold",
                            }}
                          >
                            &#8377;200.00
                          </Typography>
                          <Typography
                            style={{
                              marginLeft: "0.5vw",
                            }}
                            variant="body2"
                            color="textSecondary"
                          >
                            &#8377;250.00
                          </Typography>
                        </div>
                        <Typography
                          className={classes.cartText}
                          variant="body2"
                          gutterBottom
                          style={{ color: "green" }}
                        >
                          You save &#8377;50.00
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Grid container>
                          <Grid item>
                            <IconButton color="primary" aria-label="logo">
                              <ShoppingBasketIcon />
                            </IconButton>
                          </Grid>
                          <Grid item>
                            <IconButton color="primary" aria-label="logo">
                              <DeleteIcon />
                            </IconButton>
                          </Grid>
                        </Grid>
                        <div className={classes.wishlistDate}>
                          Added on 05.July.2021
                        </div>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Grid container>
                      <Grid item xs={4}>
                        <ButtonBase className={classes.image}>
                          <img
                            className={classes.img}
                            alt="complex"
                            src={product1}
                          />
                        </ButtonBase>
                      </Grid>
                      <Grid item xs={5}>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          style={{ fontWeight: "bold" }}
                        >
                          Rice
                        </Typography>
                        <Rating
                          name="read-only"
                          value={3}
                          readOnly
                          size="small"
                        />
                        <div style={{ display: "flex" }}>
                          <Typography
                            variant="body2"
                            gutterBottom
                            style={{
                              fontWeight: "bold",
                            }}
                          >
                            &#8377;200.00
                          </Typography>
                          <Typography
                            style={{
                              marginLeft: "0.5vw",
                            }}
                            variant="body2"
                            color="textSecondary"
                          >
                            &#8377;250.00
                          </Typography>
                        </div>
                        <Typography
                          className={classes.cartText}
                          variant="body2"
                          gutterBottom
                          style={{ color: "green" }}
                        >
                          You save &#8377;50.00
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Grid container>
                          <Grid item>
                            <IconButton color="primary" aria-label="logo">
                              <ShoppingBasketIcon />
                            </IconButton>
                          </Grid>
                          <Grid item>
                            <IconButton color="primary" aria-label="logo">
                              <DeleteIcon />
                            </IconButton>
                          </Grid>
                        </Grid>
                        <div className={classes.wishlistDate}>
                          Added on 05.July.2021
                        </div>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>
      </div>
    </ThemeProvider>
  );
}

export default WishList;
