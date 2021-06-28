import React, { useState } from "react";

// Libraries
import axios from "axios";
import { connect } from "react-redux";

// @material-ui components
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

// local components
import { addressURL } from "../../consts/constants";
import { states } from "../../consts/states";
import theme from "../../consts/theme";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function AddressForm(props) {
  const useStyles = makeStyles((theme) => ({
    buttons: {
      display: "flex",
      justifyContent: "flex-end",
    },
  }));
  const { token } = props;
  const [addressData, setAddressData] = useState({
    name: "",
    contact: "",
    contact2: "",
    apartment_address: "",
    street_address: "",
    city: "",
    state: "",
    area_pincode: "",
  });
  const onChangeHandler = (e) => {
    setAddressData({
      ...addressData,
      [e.target.name]: e.target.value,
    });
  };
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openerror, setOpenerror] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSuccess(false);
    setOpenerror(false);
  };
  const classes = useStyles();
  const [openEditConfirm, setOpenEditConfirm] = React.useState(false);
  const handleClickOpen = () => {
    setOpenEditConfirm(true);
  };

  const handleEditClose = (from) => {
    if (from === "no") {
      setOpenEditConfirm(false);
    } else if (from === "yes") {
      props.handleEdit(addressData);
      setOpenEditConfirm(false);
    }
  };
  const handleAddAddress = (e) => {
    axios
      .post(
        addressURL,
        {
          name: addressData.name,
          contact: addressData.contact,
          contact2: addressData.contact2,
          apartment_address: addressData.apartment_address,
          street_address: addressData.street_address,
          city: addressData.city,
          state: addressData.state,
          area_pincode: addressData.area_pincode,
          address_type: "W",
          default_shipping: false,
          default_billing: false,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          props.addToDetails(res.data);
          setAddressData({
            name: "",
            contact: "",
            contact2: "",
            apartment_address: "",
            street_address: "",
            city: "",
            state: "",
            area_pincode: "",
          });
          setOpenSuccess(true);
        }
      })
      .catch((err) => {
        setOpenerror(true);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.nativeEvent.submitter.innerText === "ADD") {
      handleAddAddress();
    } else {
      handleClickOpen();
    }
  };
  React.useEffect(() => {
    if (props.updateDetails !== null) {
      setAddressData(props.updateDetails);
    }
    if (props.turnEmpty) {
      setAddressData({
        name: "",
        contact: "",
        contact2: "",
        apartment_address: "",
        street_address: "",
        city: "",
        state: "",
        area_pincode: "",
      });
      props.setTurnEmpty(false);
    }
  }, [props]);
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h6" gutterBottom align="center">
        {props.updateDetails === null
          ? "Add a new Address"
          : "Update the Address"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              id="name"
              name="name"
              label="Full name"
              fullWidth
              value={addressData.name}
              autoComplete="given-name"
              onChange={onChangeHandler}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="contact"
              name="contact"
              label="Contact No 1"
              inputProps={{
                pattern: "[1-9]{1}[0-9]{9}",
              }}
              value={addressData.contact}
              placeholder="10 digit mobile number without prefixes"
              fullWidth
              onChange={onChangeHandler}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="contact2"
              name="contact2"
              label="Contact No 2 (optional)"
              inputProps={{
                pattern: "[1-9]{1}[0-9]{9}",
              }}
              value={addressData.contact2}
              placeholder="10 digit mobile number without prefixes"
              fullWidth
              onChange={onChangeHandler}
              // TODO add onchage checks
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="apartment_address"
              name="apartment_address"
              label="Flat,House no.,Building,Company,Apartment"
              fullWidth
              value={addressData.apartment_address}
              autoComplete="shipping address-line2"
              onChange={onChangeHandler}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="street_address"
              name="street_address"
              label="Area,Colony,Street,Sector,Village"
              fullWidth
              value={addressData.street_address}
              autoComplete="shipping address-level2"
              onChange={onChangeHandler}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="Town/City"
              fullWidth
              autoComplete="city"
              value={addressData.city}
              onChange={onChangeHandler}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="state"
              select
              name="state"
              label="State/Province/Region"
              fullWidth
              onChange={onChangeHandler}
              value={addressData.state}
            >
              {states.map((option, key) => (
                <MenuItem key={key} value={option.name} name={option.name}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="area_pincode"
              inputProps={{
                pattern: "[1-9]{1}[0-9]{5}",
              }}
              value={addressData.area_pincode}
              label="Zip / Postal code"
              fullWidth
              onChange={onChangeHandler}
              autoComplete="shipping postal-code"
            />
          </Grid>
          <Grid item xs>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveAddress" value="yes" />
              }
              label="Use this address for payment details"
            />
          </Grid>
          <Grid item xs className={classes.buttons}>
            {props.updateDetails === null ? (
              <Button
                type="submit"
                variant="contained"
                style={{
                  backgroundColor: "#37b3f9",
                  color: "#FFFFFF",
                  marginBottom: "4vh",
                }}
              >
                Add
              </Button>
            ) : (
              <Button
                type="submit"
                variant="contained"
                style={{
                  backgroundColor: "#37b3f9",
                  color: "#FFFFFF",
                  marginBottom: "4vh",
                }}
              >
                Update
              </Button>
            )}
          </Grid>
        </Grid>
      </form>
      <Snackbar
        open={openSuccess}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          Address Added Successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={openerror} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Unable to process your request!
        </Alert>
      </Snackbar>
      <Dialog open={openEditConfirm} onClose={handleEditClose}>
        <DialogTitle>
          {"Do you want to edit the address permanently?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            The address would be edited permanently.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            onClick={() => handleEditClose("no")}
            color="primary"
          >
            No
          </Button>
          <Button
            onClick={() => handleEditClose("yes")}
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
const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};
export default connect(mapStateToProps)(AddressForm);
