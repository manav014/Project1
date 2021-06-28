import React, { useEffect, useState } from "react";

// Libraries
import { useHistory } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

// @material-ui components
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Skeleton from "@material-ui/lab/Skeleton";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { ThemeProvider } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

// local components
import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";
import { addressURL, addressSlugURL } from "../../consts/constants";
import AddressAccordion from "./AddressAccordion";
import styles from "../../styles/js/Checkout/AddressPageStyle";
import theme from "../../consts/theme";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles(styles);

function AddressPage(props) {
  const classes = useStyles();

  const [openSuccess, setOpenSuccess] = useState(false);
  const [openerror, setOpenerror] = useState(false);

  const [openEditSuccess, setEditSuccess] = useState(false);
  const [openEditerror, setOpenEditerror] = useState(false);
  const [details, setdetails] = useState([]);
  const [turnEmpty, setTurnEmpty] = useState(false);
  const [updateDetails, setUpdateDetails] = useState(null);
  const [addressLoading, setAddressloading] = useState(true);

  const skeletons = [1, 2, 3];
  const { token } = props;
  const formRef = React.useRef(null);
  let history = useHistory();

  const handleForm = () => {
    formRef.current.scrollIntoView({
      behavior: "smooth",
    });
    if (updateDetails !== null) {
      setUpdateDetails(null);
      setTurnEmpty(true);
    }
  };

  const handleRedirect = (url) => {
    history.push(url);
  };

  const handleSnackClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccess(false);
    setOpenerror(false);
    setEditSuccess(false);
    setOpenEditerror(false);
  };

  const handleDelete = (detail) => {
    axios
      .delete(addressSlugURL(detail.slug), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          const newDetails = details.filter((item) => item !== detail);
          setdetails(newDetails);
          setOpenSuccess(true);
        }
      })
      .catch((err) => {
        console.log(err.response);
        setOpenerror(true);
        //TODO Error
      });
  };

  const addToDetails = (detail) => {
    const newDetails = details.concat(detail);
    setdetails(newDetails);
  };
  const handleEdit = (detail) => {
    axios
      .put(
        addressSlugURL(detail.slug),
        {
          name: detail.name,
          contact: detail.contact,
          contact2: detail.contact2,
          apartment_address: detail.apartment_address,
          street_address: detail.street_address,
          city: detail.city,
          state: detail.state,
          area_pincode: detail.area_pincode,
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
        const newDetails = details;
        const index = newDetails.findIndex((obj) => obj.slug === res.data.slug);
        newDetails[index] = res.data;
        setdetails(newDetails);
        setEditSuccess(true);
      })
      .catch((err) => {
        console.log(err.response);
        setOpenEditerror(true);
      });
  };

  const getAddresses = () => {
    setAddressloading(true);
    axios
      .get(addressURL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setAddressloading(false);
        setdetails(res.data);
      })
      .catch((err) => {
        console.log(err.response);
        setAddressloading(false);
        //TODO Error
      });
  };

  useEffect(() => {
    if (token) getAddresses();
    // HELP The below comment is to remove warning
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
  const steps = ["Shipping address", "Payment details", "Review your order"];

  return (
    <ThemeProvider theme={theme}>
      <Stepper activeStep={0} className={classes.stepper}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container>
        <Grid item xs={6}>
          <Typography component="h2" variant="h5" className={classes.shipping}>
            Shipping Address
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleForm}
              style={{
                color: "white",
              }}
              className={classes.button}
            >
              Add New Address
            </Button>
          </div>
        </Grid>
      </Grid>
      <Hidden mdUp>
        <div className={classes.root}>
          {!addressLoading ? (
            details.map((detail, key) => (
              <AddressAccordion
                detail={detail}
                key={key}
                handleNext={() => {
                  handleRedirect("/checkout/payment");
                }}
                openEditForm={() => {
                  handleForm();
                  setUpdateDetails(detail);
                }}
                handleDelete={handleDelete}
              />
            ))
          ) : (
            <div>
              {skeletons.map((index) => (
                <Box
                  key={index}
                  width={300}
                  marginLeft={6}
                  marginRight={12}
                  my={5}
                >
                  <Box pt={0.5}>
                    <Skeleton />
                    <Skeleton width="60%" />
                  </Box>
                </Box>
              ))}
            </div>
          )}
        </div>
      </Hidden>
      <Grid container spacing={3} style={{ marginTop: "2vh" }}>
        <Hidden smDown>
          {!addressLoading ? (
            details.map((detail, key) => (
              <Grid item xs={10} sm={4}>
                <AddressCard
                  key={key}
                  handleNext={() => {
                    handleRedirect("/checkout/payment");
                  }}
                  openEditForm={() => {
                    handleForm();
                    setUpdateDetails(detail);
                  }}
                  handleDelete={handleDelete}
                  detail={detail}
                />
              </Grid>
            ))
          ) : (
            <div style={{ display: "flex" }}>
              {skeletons.map((index) => (
                <Box
                  key={index}
                  width={210}
                  marginLeft={6}
                  marginRight={12}
                  my={5}
                >
                  <Skeleton variant="rect" width={280} height={150} />
                  <Box pt={0.5}>
                    <Skeleton />
                    <Skeleton width="60%" />
                  </Box>
                </Box>
              ))}
            </div>
          )}
        </Hidden>
        <Grid item xs={12}>
          <div ref={formRef} key={1}>
            <AddressForm
              handleEdit={handleEdit}
              updateDetails={updateDetails}
              addToDetails={addToDetails}
              turnEmpty={turnEmpty}
              setTurnEmpty={setTurnEmpty}
            />
          </div>
        </Grid>
      </Grid>

      <Snackbar
        open={openSuccess}
        autoHideDuration={4000}
        onClose={handleSnackClose}
      >
        <Alert open={openSuccess} onClose={handleSnackClose} severity="success">
          Address Deleted Successfully!
        </Alert>
      </Snackbar>
      <Snackbar
        open={openEditSuccess}
        autoHideDuration={4000}
        onClose={handleSnackClose}
      >
        <Alert
          open={openEditSuccess}
          onClose={handleSnackClose}
          severity="success"
        >
          Address Edited Successfully!
        </Alert>
      </Snackbar>

      <Snackbar
        open={openerror || openEditerror}
        autoHideDuration={4000}
        onClose={handleSnackClose}
      >
        <Alert onClose={handleSnackClose} severity="error">
          Unable to process your request!
        </Alert>
      </Snackbar>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" color="primary">
          {"Next"}
        </Button>
      </div>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};
export default connect(mapStateToProps)(AddressPage);
