import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import maggi from "../../assets/HomePage/maggi.png";
import AddIcon from "@material-ui/icons/Add";
import dairy from "../../assets/HomePage/dairy.jpg";
import dals from "../../assets/HomePage/dals.jpg";
import flour from "../../assets/HomePage/flour.jpg";
import theme from "../../consts/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "5px",
    marginRight: "5px",
    marginBottom: "3vh",
    // [theme.breakpoints.down(1400 + theme.spacing(3) * 2)]: {
    //   maxWidth: "50vw !important",
    // },
    [theme.breakpoints.down(1300 + theme.spacing(3) * 2)]: {
      // maxWidth: "50vw",
      // minWidth: "12vw",
    },
  },
  carouselImage: {
    height: "20vh",
    margin: "auto",
    objectFit: "contain",
  },
  carouselItem: {
    marginLeft: "1.5vw !important",
    [theme.breakpoints.down(1400 + theme.spacing(3) * 2)]: {
      marginLeft: "0.8vw !important",
    },
    [theme.breakpoints.down(1350 + theme.spacing(3) * 2)]: {
      marginLeft: "2vw !important",
    },
    [theme.breakpoints.down(1250 + theme.spacing(3) * 2)]: {
      marginLeft: "1.2vw !important",
    },
    [theme.breakpoints.down(1050 + theme.spacing(3) * 2)]: {
      marginLeft: "0.8vw !important",
    },
    [theme.breakpoints.down(400 + theme.spacing(3) * 2)]: {
      marginLeft: "-5vw !important",
    },
  },
  product: {
    fontSize: "1rem",
    fontWeight: "600",
  },
  productPrice: {
    fontSize: "1rem",
    fontWeight: "600",
    lineHeight: "15px",
    display: "flex",
  },
  productMRP: {
    fontSize: "13px",
    lineHeight: "15px",
    textDecoration: "line-through",
    color: "#777777",
    marginLeft: "5px",
    display: "flex",
  },
  button: {
    width: "100%",
    marginTop: "2vh",
    backgroundColor: "#37b3f9",
    color: "#ffffff",
    fontWeight: "600",
  },
}));

export default function MediaCard() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <h2 style={{ marginLeft: "1vw" }}>TOP DEALS</h2>
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass={classes.carouselItem}
      >
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.carouselImage}
              component="img"
              alt="Shop"
              image={maggi}
            ></CardMedia>

            <CardContent>
              <div className={classes.product}>Maggi Atta Noodles</div>
              <div
                style={{
                  display: "flex",
                }}
              >
                <div className={classes.productPrice}>
                  &#8377; <div style={{ marginLeft: "1px" }}>21</div>
                </div>
                <div className={classes.productMRP}>
                  &#8377; <div style={{ marginLeft: "1px" }}>25</div>
                </div>
              </div>
              <Button
                variant="contained"
                className={classes.button}
                endIcon={<AddIcon />}
              >
                Add to Cart
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Shop"
              className={(classes.media, classes.carouselImage)}
              image={dals}
              title="Contemplative Reptile"
            />
            <CardContent>
              <div className={classes.product}>Arhar Dal</div>
              <div style={{ display: "flex" }}>
                <div className={classes.productPrice}>
                  &#8377; <div style={{ marginLeft: "1px" }}>54</div>
                </div>
                <div className={classes.productMRP}>
                  &#8377; <div style={{ marginLeft: "1px" }}>25</div>
                </div>
              </div>
              <Button
                variant="contained"
                className={classes.button}
                endIcon={<AddIcon />}
              >
                Add to Cart
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Shop"
              className={(classes.media, classes.carouselImage)}
              image={maggi}
              title="Contemplative Reptile"
            />
            <CardContent>
              <div className={classes.product}>Maggi Atta Noddles</div>
              <div style={{ display: "flex" }}>
                <div className={classes.productPrice}>
                  &#8377; <div style={{ marginLeft: "1px" }}>21</div>
                </div>
                <div className={classes.productMRP}>
                  &#8377; <div style={{ marginLeft: "1px" }}>25</div>
                </div>
              </div>
              <Button
                variant="contained"
                className={classes.button}
                endIcon={<AddIcon />}
              >
                Add to Cart
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Shop"
              className={(classes.media, classes.carouselImage)}
              image={dairy}
              title="Contemplative Reptile"
            />
            <CardContent>
              <div className={classes.product}>Milk</div>
              <div style={{ display: "flex" }}>
                <div className={classes.productPrice}>
                  &#8377; <div style={{ marginLeft: "1px" }}>14</div>
                </div>
                <div className={classes.productMRP}>
                  &#8377; <div style={{ marginLeft: "1px" }}>25</div>
                </div>
              </div>
              <Button
                variant="contained"
                className={classes.button}
                endIcon={<AddIcon />}
              >
                Add to Cart
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Shop"
              className={(classes.media, classes.carouselImage)}
              image={flour}
              title="Contemplative Reptile"
            />
            <CardContent>
              <div className={classes.product}>Ashirvaad Atta</div>
              <div style={{ display: "flex" }}>
                <div className={classes.productPrice}>
                  &#8377; <div style={{ marginLeft: "1px" }}>68</div>
                </div>
                <div className={classes.productMRP}>
                  &#8377; <div style={{ marginLeft: "1px" }}>25</div>
                </div>
              </div>
              <Button
                variant="contained"
                className={classes.button}
                endIcon={<AddIcon />}
              >
                Add to Cart
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Shop"
              className={(classes.media, classes.carouselImage)}
              image={dals}
              title="Contemplative Reptile"
            />
            <CardContent>
              <div className={classes.product}>Moong Dal</div>
              <div style={{ display: "flex" }}>
                <div className={classes.productPrice}>
                  &#8377; <div style={{ marginLeft: "1px" }}>72</div>
                </div>
                <div className={classes.productMRP}>
                  &#8377; <div style={{ marginLeft: "1px" }}>25</div>
                </div>
              </div>
              <Button
                variant="contained"
                className={classes.button}
                endIcon={<AddIcon />}
              >
                Add to Cart
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
      </Carousel>
    </ThemeProvider>
  );
}
