import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
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
    state,
    address_type,
  } = props;
  return (
    <Card className={classes.root} style={{ marginLeft: "3vw" }}>
      {/* <CardActionArea> */}
      <CardContent>
        <CardHeader title={props.detail.name} />
        <Typography variant="body2" color="textPrimary" component="h1">
          {props.detail.apartment_address} {props.detail.street_address}
          {","}
          <br />
          {props.detail.area_pincode}
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
          onClick={()=>props.deleteAddress(props.detail)}
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
  default_shipping: PropTypes.bool,
  detail: PropTypes.object,
  handleNext: PropTypes.func,
  deleteAddress: PropTypes.func,
  default_billing: PropTypes.bool,
};
