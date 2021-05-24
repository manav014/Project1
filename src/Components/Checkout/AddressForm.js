import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { addressListURL } from "../../consts/constants";
import { states } from "../../consts/states";
import { connect } from "react-redux";
import MenuItem from "@material-ui/core/MenuItem";

function AddressForm(props) {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        addressListURL + "?query=add",
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
        //TODO Print the response using snackBar
        console.log("Added Successfully");
      })
      .catch((err) => {
        //TODO Print the response using snackBar
        console.log(err.response);
      });
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom align="center">
        Add a new Address
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
              placeholder="10 digit mobile number without prefixes"
              fullWidth
              onChange={onChangeHandler}
              //TODO Add Checks
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="apartment_address"
              name="apartment_address"
              label="Flat,House no.,Building,Company,Apartment"
              fullWidth
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
              onChange={onChangeHandler}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              select
              name="state"
              label="State/Province/Region"
              fullWidth
              onChange={onChangeHandler}
              value={addressData.state}
            >
              {states.map((option, key) => (
                <MenuItem
                  key={key}
                  value={option.name}
                  name={option.name}
                  onclick={onChangeHandler}
                >
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
              label="Zip / Postal code"
              fullWidth
              autoComplete="shipping postal-code"
              onChange={onChangeHandler}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveAddress" value="yes" />
              }
              label="Use this address for payment details"
            />
          </Grid>
        </Grid>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          style={{
            backgroundColor: "#37b3f9",
            color: "#FFFFFF",
            marginBottom: "4vh",
          }}
        >
          Add Address
        </Button>
      </form>
    </React.Fragment>
  );
}
const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};
export default connect(mapStateToProps)(AddressForm);
