import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  containedPrimary: {
    color: "#00A3FF",
  },
  onHover: {
    "&:hover": {
      border: "2px solid #00A3FF",
    },
  },
});

export default function AddressCard(props) {
  const classes = useStyles();
  const {
    title,
    contact,
    apartment_address,
    street_address,
    area_pincode,
    state,
    address_type,
    default_shipping,
    default_billing,
  } = props;
  return (
    <Card className={classes.root} style={{ marginLeft: "3vw" }}>
      {/* <CardActionArea> */}
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textPrimary" component="h1">
          {apartment_address} {street_address}
          {","}
          <br />
          {area_pincode}
          <br />
          {state}
          {address_type}
        </Typography>
      </CardContent>
      {/* </CardActionArea> */}
      <CardActions>
        <Button
          style={{
            backgroundColor: "#00A3FF",
            color: "white",
            width: "100vh",
          }}
          variant="contained"
          size="large"
          onClick={props.handleNext}
        >
          Deliver Here
        </Button>
      </CardActions>
      <CardActions style={{ height: "5vh" }}>
        <Button
          className={classes.onHover}
          size="small"
          style={{
            color: "#00A3FF",
            width: "50%",
          }}
        >
          Edit
        </Button>
        <Divider orientation="horizontal" />
        <Button
          className={classes.onHover}
          size="small"
          style={{
            color: "#00A3FF",
            width: "50%",
          }}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

AddressCard.propTypes = {
  title: PropTypes.string,
  contact: PropTypes.string,
  apartment_address: PropTypes.string,
  street_address: PropTypes.string,
  area_pincode: PropTypes.string,
  state: PropTypes.string,
  address_type: PropTypes.string,
  default_shipping: PropTypes.bool,
  handleNext: PropTypes.func,
  default_billing: PropTypes.bool,
};
