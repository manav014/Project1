import React from "react";

// Libraries
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// @material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { ThemeProvider } from "@material-ui/core/styles";

// local components
import dairy from "../../assets/HomePage/dairy.jpg";
import dals from "../../assets/HomePage/dals.jpg";
import flour from "../../assets/HomePage/flour.jpg";
import maggi from "../../assets/HomePage/maggi.png";
import theme from "../../consts/theme";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "10vw",
    maxWidth: "38vw",
    minHeight: "10vh",
    maxHeight: "30vh",
    marginLeft: "5px",
    marginRight: "5px",
    marginBottom: "3vh",
    // [theme.breakpoints.down(1400 + theme.spacing(3) * 2)]: {
    //   maxWidth: "50vw !important",
    // },
    [theme.breakpoints.down(1300 + theme.spacing(3) * 2)]: {
      maxWidth: "50vw",
      minWidth: "12vw",
    },
  },
  carouselImage: {
    height: "20vh",
    objectFit: "cover",
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
}));
export default function ProductsTab() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
        <Card
          className={classes.root}
          style={{
            marginLeft: "2vw",
            height: "30vh",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Shop"
              className={(classes.media, classes.carouselImage)}
              image={maggi}
              title="Contemplative Reptile"
            />
            <CardContent>
              <div>Whole Wheat Bread</div>
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
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          className={classes.root}
          style={{
            marginLeft: "2vw",
            height: "30vh",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Shop"
              className={(classes.media, classes.carouselImage)}
              image={dals}
              title="Contemplative Reptile"
            />
            <CardContent>
              <div>Whole Wheat Bread</div>
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
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          className={classes.root}
          style={{
            marginLeft: "2vw",
            height: "30vh",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Shop"
              className={(classes.media, classes.carouselImage)}
              image={maggi}
              title="Contemplative Reptile"
            />
            <CardContent>
              <div>Whole Wheat Bread</div>
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
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          className={classes.root}
          style={{
            marginLeft: "2vw",
            height: "30vh",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Shop"
              className={(classes.media, classes.carouselImage)}
              image={dairy}
              title="Contemplative Reptile"
            />
            <CardContent>
              <div>Whole Wheat Bread</div>
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
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          className={classes.root}
          style={{
            marginLeft: "2vw",

            height: "30vh",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Shop"
              className={(classes.media, classes.carouselImage)}
              image={flour}
              title="Contemplative Reptile"
            />
            <CardContent>
              <div>Whole Wheat Bread</div>
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
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          className={classes.root}
          style={{
            marginLeft: "2vw",

            height: "30vh",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Shop"
              className={(classes.media, classes.carouselImage)}
              image={dals}
              title="Contemplative Reptile"
            />
            <CardContent>
              <div>Whole Wheat Bread</div>
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
            </CardContent>
          </CardActionArea>
        </Card>
      </Carousel>
    </ThemeProvider>
  );
}
