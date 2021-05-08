import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import dairy from "../../assets/HomePage/dairy.jpg";
import dals from "../../assets/HomePage/dals.jpg";
import flour from "../../assets/HomePage/flour.jpg";
import maggi from "../../assets/HomePage/maggi.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const useStyles = makeStyles({
  root: {
    minWidth: "10vw",
    maxWidth: "30vw",
    minHeight: "10vh",
    maxHeight: "30vh",
    marginLeft: "5px",
    marginRight: "5px",
  },
  carouselImage: {
    height: "20vh",
    objectFit: "cover",
  },
});
export default function ProductsTab() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  const classes = useStyles();

  return (
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
      itemClass="carousel-item-padding-40-px"
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
            image={flour}
            title="Contemplative Reptile"
          />
          <CardContent>
            {" "}
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
            {" "}
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
            {" "}
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
            {" "}
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
            {" "}
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
            {" "}
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
  );
}
