import React from "react";

// Libraries
import PropTypes from "prop-types";

// @material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ThemeProvider } from "@material-ui/core/styles";

// local components
import theme from "../../consts/theme";

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
  const [openDeleteConfirm, setOpenDeleteConfirm] = React.useState(false);
  const { state, address_type } = props;

  const handleClickOpen = () => {
    setOpenDeleteConfirm(true);
  };

  const handleDeleteClose = (from) => {
    if (from === "no") {
      setOpenDeleteConfirm(false);
    } else if (from === "yes") {
      props.handleDelete(props.detail);
      setOpenDeleteConfirm(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root} style={{ marginLeft: "3vw" }}>
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
            onClick={props.openEditForm}
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
            onClick={handleClickOpen}
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
      <Dialog open={openDeleteConfirm} onClose={handleDeleteClose}>
        <DialogTitle>
          {"Do you want to delete the address permanently?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            The address would be deleted permanently.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            onClick={() => handleDeleteClose("no")}
            color="primary"
          >
            No
          </Button>
          <Button
            onClick={() => handleDeleteClose("yes")}
            color="primary"
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}

AddressCard.propTypes = {
  default_shipping: PropTypes.bool,
  detail: PropTypes.object,
  handleNext: PropTypes.func,
  handleClickOpen: PropTypes.func,
  default_billing: PropTypes.bool,
};
